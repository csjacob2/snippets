$(document).ready(function(){

    //text string
    var shaInputString = 'THE OUTDOORSY HOME OF BRITISH MERRY MEN BECOMES THE NEW PAD FOR A LAST KING OF SCOTLAND WINNER';
    //hash conversion
    var hash = CryptoJS.SHA256(shaInputString);

    $('div.main').append('Encrypting SHA256...<br/>' + hash);

});
