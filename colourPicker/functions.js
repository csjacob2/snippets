$(document).ready(function(){
    // RR GG BB is the order
    initialize();

    function initialize(){
        var startValue;

        // set starting value of 0 in text
        $('#text_red').html(0);
        $('#text_green').html(0);
        $('#text_blue').html(0);

        // set initial colour of swatch
        startValue = calculateRGB(0, 0, 0);
        updateSwatch(startValue);
    }

    $('.slider').on('input', function () {
        // get values of sliders as they move
        var rgbValue;

        $(this).next('span').html($(this).val());

        var sliderRed = parseInt($('#color_red').val());
        var sliderGreen = parseInt($('#color_green').val());
        var sliderBlue = parseInt($('#color_blue').val());

        // pass the three slider values to the RGB function and update the swatch
        rgbValue = calculateRGB(sliderRed, sliderGreen, sliderBlue);
        updateSwatch(rgbValue);
    });

    function calculateRGB(rs, gs, bs) {
        // wanted to put this in as ...args but babel blew up (not sure why)

        var hexValues = [];

        for (let i = 0; i < arguments.length; i++) {
            // convert each arg from dec to hex
            var tempValue = arguments[i].toString(16);

            if (tempValue.length < 2) {
                // some chars convert to length 1 which doesn't work for RGB colours
                // need to add a padding 0
                tempValue = '0'+tempValue;
            }
            hexValues.push(tempValue);
        }

        return hexValues.join('');
    }

    function updateSwatch(rgbValue) {
        // function to update the swatch and text value
        $('#swatch_circle').css('background-color', '#'+rgbValue);
        $('#rgb_text').html('#'+rgbValue);
    }
});