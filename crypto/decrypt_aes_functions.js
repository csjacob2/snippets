$(document).ready(function(){

    var aesKeyHex = '55efadac449044d524e072d91d3eee057f48538ac364d4eb00d5bee0aa0710cf';
    var aesIVHex = '1caaf0f2280e86ab52a37a153eec901f';
    var aesCipherHex = '76bf49ad4abd083ad5efebef1413d3dce9adcd2b3b4fc3ee58cff7e599fd52500b8b25e264265cebce3b9415220466c039e435effb227dbe73491cf72c0e0a35fc2f2dd9aed691143faf6993c0995ad05e9ffcac4be3cd16fa7938273cb1da93';

    //Creating the Vector Key
    var p_aesIVHex = CryptoJS.enc.Hex.parse(aesIVHex);
    //Creating the key
    var p_aesKeyHex = CryptoJS.enc.Hex.parse(aesKeyHex);

    //Enclosing the text to be decrypted in a CipherParams object as supported by the CryptoJS libarary
    var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Hex.parse(aesCipherHex)
    });

    //Decrypting the string contained in cipherParams using the PBKDF2 key
    var decrypted = CryptoJS.AES.decrypt(cipherParams, p_aesKeyHex, { mode: CryptoJS.mode.CBC, iv: p_aesIVHex });
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

    $('div.decrypt').append('Decrypting AES...<br/>')
                    .append('Converted to plaintext: ' + plaintext);

});
