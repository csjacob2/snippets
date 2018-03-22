/*
 while any string > 7 digits is possibly valid, there's a limit to how many double digit values can be made out of the string
 7 digit string - 0 double digits
 8 - 1
 9 - 2
 10 - 3
 11 - 4
 12 - 5
 13 - 6
 14 - 7
 so there's a hard limit of max 14 characters
 there must be X single digit + y double digit = length of string
 this number is used for the doubleDigits / singleDigits calculation to generate the number of possible options

 ** this is a DFS tree algorithm **
*/


$(document).ready(function(){
    var testArray = ['493853289475', '30456789', '30306789', '030306789', '31316789', '1234567', '569815571556', '472844278465445', '123'];

    testArray.forEach(function(element) {
        var lottoNumbers = lotteryNumbers.calculateNumbers(element);
        console.log('possible lotto pick for ' + element + ': ' + lottoNumbers);
    });
});

var lotteryNumbers = (function() {

    var numbers = [];

    function _calculateNumbers(lottoNumber) {

        var singleDigits, doubleDigits, arraySplit, response;
        var lengthLN = lottoNumber.length;

        if (lengthLN < 7 || lengthLN > 14) {
            // discard any array values that are too short or long
            response = 'invalid number';
        } else {
            // treat each element of the string as a separate char
            arraySplit = lottoNumber.split('');

            // calculate double and single numbers based on length of string (see note above)
            doubleDigits = lottoNumber.length - 7;
            singleDigits = 7 - doubleDigits;

            // reset (clear) array
            numbers = [];

            response = testNumber(arraySplit, 0, singleDigits, doubleDigits);
        }
        return response;
    }

    function testNumber(numberArray, index, sd, dd) {

        var singleDigit, doubleDigit, foundLottoNumber;

        if (sd == 0 && dd == 0) {
            // base case, return from recursion
            return numbers;
        }

        // double digit condition
        if (dd > 0 && numberArray.length >= index+1) {
            doubleDigit = parseInt(numberArray[index]+''+numberArray[index+1]);

            // check for digit in range and NOT already stored in array (duplicated)
            if (doubleDigit >= 10 && doubleDigit <= 59 && !numbers.includes(doubleDigit)) {
                // add to array
                numbers.push(doubleDigit);

                // move two digits through array, decrease doubleDigit count, recursive call
                foundLottoNumber = testNumber(numberArray, index+2, sd, dd-1);

                if (foundLottoNumber != null) {
                    return foundLottoNumber;
                }
            }
        }

        // single digit condition
        if (sd > 0) {
            singleDigit = numberArray[index];

            // check if digit not zero and NOT already stored in array (duplicated)
            if (singleDigit > 0 && !numbers.includes(singleDigit)) {
                // add to array
                numbers.push(singleDigit);

                // move single digit through array, decrease singleDigit count, recursive call
                foundLottoNumber = testNumber(numberArray, index+1, sd-1, dd);

                if (foundLottoNumber != null) {
                    return foundLottoNumber;
                }
            }
        }

        // didn't find a valid number
        return null;
    }

    return {
        calculateNumbers: _calculateNumbers
    }
})();