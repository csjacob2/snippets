$(document).ready(function(){

    var aesWeakCipherText = 'f779a088a5af6196c070438c14581342332cbd6210c3b3d7b437273d8c1114237f969c4a3995d21da03da745aee4b4c3dc8af7b56dd54396772a2d2b78fe8935074698ac611773c504c7ae7cb86bed45547c6997c19e301a614699d1845ed710';
    var ivKey = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
    var keyT = '0000000000000000000000000000000000000000000000000000000000000014';

    //Enclosing the text to be decrypted in a CipherParams object as supported by the CryptoJS libarary
    cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Hex.parse(aesWeakCipherText)
    });

    var key = CryptoJS.enc.Hex.parse(keyT);
    var decrypted = CryptoJS.AES.decrypt(cipherParams, key, { mode: CryptoJS.mode.CBC, iv: ivKey });
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

    $('div.decrypt').append('Breaking weak a AES key...<br/>')
                    .append('Plaintext: ' + plaintext);

});
