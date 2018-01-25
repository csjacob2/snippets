$(document).ready(function() {

    var singlePWD = ['06c5a1c5e72c53126927c5640a6381f3', 'e8847133c4152d265693f33033736cb0', '62cd275989e78ee56a81f0265a87562e', '77546adee22d8ba2210d753f17395eea', '6f22b69b652511f0392680930de7736a'];
    var comboPWD = ['d658ac3c72874fcd28ee5118e48b5313', 'a52e84fd28aa06ced25ba2105f74c55b', '5194fd9be30448463092f1f5b5438b29', '1ff34d76a57848b04f371cd2653a3c12'];
    var complexPWD = ['aebc32ef2e40d6fe62e69469746f0705'];

    // this could be written as loops with the passwords in one array but i don't want to run the crypto hash on *every loop* iteration for each password
    // since we know the pattern of passwords for this particular scenario, pass the array of passwords to be tested to each function
    // each function will build a rainbow table of hashes *once* and then find the matching password hash in it
    // this should only have to build three rainbow tables (one table per function)
    // it still loops through the array of bad passwords multiple times though, which means depending on which test we're doing, it's pretty slow

    // test hashed_passwords [0-4] (single words will match)
    bruteSingle(singlePWD);

    // test hashed_passwords [5-8] (combination passwords, either two words or a word+number)
    bruteCombo(comboPWD);

    // test hashed_password [9] (substitution password, special character or number for any character)
    complexCombo(complexPWD);
});


function bruteSingle(hp) {

    var hashMap = new Map();
    var encryptBadPwd;

    $.get('passwords.json', function(badPasswordsList) {

        for (let i in badPasswordsList) {
            encryptBadPwd = CryptoJS.MD5(badPasswordsList[i]);
            hashMap.set(''+encryptBadPwd, badPasswordsList[i]);
        }

        for (let i = 0; i < hp.length; i++) {
            $('.single .main').append('Hash: ' + hp[i] + ' || Cracked password: ' + hashMap.get(hp[i]) + '<br/>');
        }
    });
}

function bruteCombo(hp) {

    var hashMap = new Map();
    var newPWD, encryptBadPwd;

    // using shortened list because this takes way too long with 10k words
    $.get('passwords_e.json', function(badPasswordsList) {

        var badPwdListLength = badPasswordsList.length;

        // build map of combo passwords first
        // combo password table is 10,000 x 10,000 words
        for (let i = 0; i < badPwdListLength; i++) {
            for (let j = 0; j < badPwdListLength; j++) {
                newPWD = '' + badPasswordsList[i] + badPasswordsList[j];
                encryptBadPwd = CryptoJS.MD5(newPWD);
                hashMap.set(''+encryptBadPwd, newPWD);
            }
        }

        // add passwords with number suffix to map
        // passwords with 0-99 suffix table is 10,000 x 100 words
        for (let i = 0; i < badPwdListLength; i++) {
            for (j = 0; j <= 99; j++) {
                newPWD = '' + badPasswordsList[i] + j;
                encryptBadPwd = CryptoJS.MD5(newPWD);
                hashMap.set(''+encryptBadPwd, newPWD);
            }
        }

        // total rainbow table size = 100,000,000 + 1,000,000 = 101,000,000
        // this is if running on passwords.json, the original file
        for (let i = 0; i < hp.length; i++) {
            $('.combo .main').append('Hash: ' + hp[i] + ' || Cracked password: ' + hashMap.get(hp[i]) + '<br/>');
        }
    });
}

function complexCombo(hp) {

    var hashMap = new Map();
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '.', ',', '|', '?'];
    var specCharLength = specialChars.length;
    var newPWD, badPasswordLength, encryptBadPwd;

    // can use normal 10k file because it doesn't run stupidly long
    $.get('passwords.json', function(badPasswordsList) {

        var badPwdListLength = badPasswordsList.length;

        // build map of passwords, substituting one character out with special chars from array
        for (let i = 0; i < badPwdListLength; i++) {

            badPasswordLength = badPasswordsList[i].length;

            // iterate through length of a single password to replace characters in it
            for (let j = 0; j < badPasswordLength; j++) {

                // iterate through each special character and insert them into the password
                for (let scl = 0; scl < specCharLength; scl++) {
                    newPWD = replaceAt(badPasswordsList[i], j, specialChars[scl]);
                    encryptBadPwd = CryptoJS.MD5(newPWD);
                    hashMap.set(''+encryptBadPwd, newPWD);
                }
            }
        }

        for (let i = 0; i < hp.length; i++) {
            $('.sub .main').append('Hash: ' + hp[i] + ' || Cracked password: ' + hashMap.get(hp[i]) + '<br/>');
        }
    });
}

// helper function for replacing a character at location
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}