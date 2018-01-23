$(document).ready(function(){

    var spr_input_string = 'IMPRISONED ON A FALSE CHARGE EDMOND DANTES ESCAPES  EXACTS REVENGE IN THIS NOVEL BY ALEXANDRE DUMAS';
    //me: 0x597fcddc

    var spr_second_string = 'DANTES ESCAPES A FALSE REVENGE NOVEL AND SEXES EDMOND IN PRISON IN CHARGE MAD DEXTER UMLATO BAYCHIS';
    //HEX: 0x597fcddc

    $('div.main').append('First String: ' + spr_input_string)
                 .append('<br/>')
                 .append('First String WHA: ' + wha(spr_input_string))
                 .append('<br/>')
                 .append('Second String: ' + spr_second_string)
                 .append('<br/>')
                 .append('Second String WHA: ' + wha(spr_second_string));

});
