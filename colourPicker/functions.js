$(document).ready(function(){
    // RR GG BB is the order
    initialize();

    function initialize(){
        // set starting value of 0 in text
        $('#text_red').html(0);
        $('#text_green').html(0);
        $('#text_blue').html(0);
        $('#rgb_text').html('#000000');
    }

    $('.slider').on('input', function () {
        // get values of sliders as they move
        var rgbValue;
        var sliderArray = [];

        $(this).next('span').html($(this).val());

        sliderArray[0] = parseInt($('#color_red').val());
        sliderArray[1] = parseInt($('#color_green').val());
        sliderArray[2] = parseInt($('#color_blue').val());

        // pass the three slider values to the RGB function and update the swatch
        rgbValue = function() {
            var hexValues = [];

            for (let i = 0; i < sliderArray.length; i++) {
                // convert each arg from dec to hex
                var tempValue = sliderArray[i].toString(16);

                if (tempValue.length < 2) {
                    // some chars convert to length 1 which doesn't work for RGB colours
                    // need to add a padding 0
                    tempValue = '0'+tempValue;
                }
                hexValues.push(tempValue);
            }
            return hexValues.join('');
        }();

        updateSwatch(rgbValue);
    });

    function updateSwatch(rgbValue) {
        // function to update the swatch and text value
        $('.swatch_circle').css('background-color', '#'+rgbValue);
        $('#rgb_text').html('#'+rgbValue);
    }
});