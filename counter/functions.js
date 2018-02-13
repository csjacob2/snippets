$(document).ready(function() {

    var counterTimer, growthRatio, timerBarTotalWidth;
    var timerBarWidth = 0;

    $('button.timerRun').click(function() {
        resetBar(0);

        counterTimer = $('.secondsCounter').val() * 100;
        timerBarTotalWidth = $('.barWidth').val();

        growthRatio = timerBarTotalWidth / counterTimer;

        counter(counterTimer, updateBar);
    });

    const counter = (value, fn, delay = 10) => {
        fn(value);
        return (value > 0) ?
            setTimeout(() => counter(value-1, fn), delay) :
            value
    };

    const updateBar = value => {
        $('.timer').width( timerBarWidth );
        timerBarWidth += growthRatio;
        console.log(value);
    };

    function resetBar(width) {
        //clears the width for multiple button pushes without reloading the page
        $('.timer').width( width );
        timerBarWidth = 0;
    }

});