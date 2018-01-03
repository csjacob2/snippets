/*
 A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.

 During an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent).

 Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:

 OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
 OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
 AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
 AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
 LAOO LAOA LAAO

 How many "prize" strings exist over a 30-day period?
 */

/* converted to ES6 */

$(document).ready(function(){
    const days = 30;
    var totalPrizes = prizes.calculatePrizes(days,0,0);

    $('body div').append(`Total number of prizes for a ${days} day period: ${totalPrizes}`);
    console.log(`Total number of prizes for a ${days} day period: ${totalPrizes}`);
});


var prizes = (function() {
    //map prototype, isn't limited in size to hold the results unlike array
    var memoMap = new Map();

    //use closure to avoid global scope variable for Map
    function _calculatePrizes(days, absent, late) {
        // this function does not calculate full strings of n size but instead looks for subset patterns
        // the function continues to run finding combinations of three values until it either
        // a) reaches days = 0
        //      then increases prize++
        // b) reaches a fail condition
        //      absent == 3 (when absent is 3 in a row)
        //      or late > 1

        var prizeCount;

        if (absent == 3 || late > 1) {
            //failed on absent or late checks
            return 0;
        }

        if (days == 0) {
            //escape clause for recursion, end of run
			//successful prize (return one count)
            return 1;
        }

        // has this string been calculated before?
        var uniqueKey = days * 2 * 3 + absent * 2 + late;
        if (memoMap.get(uniqueKey) != undefined) {
            //yes, take the prize count that is stored and return it
			// this will be added to the prizeCount
            return memoMap.get(uniqueKey);
        }

        //recursive call calculations for each set of trinary options
        //student is on time (O, decrease day, no change in L or A)
        prizeCount = _calculatePrizes(days-1, 0, late);
        //student is absent (A, decrease day, increase A, no change in L)
        prizeCount += _calculatePrizes(days-1, absent+1, late);
        //student is late (L, decrease day, increase L, reset A, since only AAA count for fails)
        prizeCount += _calculatePrizes(days-1, 0, late+1);

        //add to map
        memoMap.set(uniqueKey, prizeCount);
        return prizeCount;
    }

    return {
        calculatePrizes: _calculatePrizes
    }
})();