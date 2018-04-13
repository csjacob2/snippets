/*
 // Question 2
 // Implement a function to compute the square root of a given number
 // For example square_root(4) should return 2 and square_root(2) should return ~1.4142
 */

/*
 use Hero's Algorithm (aka Heron, aka Babylonian method
 to determine the square root of n:
 start with x, where x is a random guess
 multiply x with itself
 if x*x is close to n, return x
 else newX = avg(x+n) / x[i-1]
 can change formula from x[i-1] since we're doing this recursively

 include supporter function to test a range of numbers to ensure it doesn't break
    an undetected bug originally created values with too many decimal places, causing a stack overflow
    but without testing enough numbers, this bug slipped through originally
*/

$(document).ready(function(){
    const n = 10, range = 100;
    var sqrt = square_root(n);

    console.log(`The square root of ${n} is: ${sqrt}`);
    console.log(`The square root of a range of values from 1 to ${range} is: `)
    console.log(loopSqrt(range));
});


function square_root(value, randomGuess) {
    // initial call should only pass one value
    // but it can also be called with two, allowing a starter randomGuess value

    if (value < 0 || isNaN(value) || (isNaN(arguments[1]) && arguments.length >=2)) {
        // error checking
        //  * cannot calculate square root of a negative number (value)
        //  * prevent passing non-numbers to either args
        return 'Not a valid  number for square root';
    }

    if (arguments.length < 2) {
        // set randomGuess value if one wasn't passed in
        // chose the value / 3 as an arbitrary starter value
        randomGuess = value / 3;
    }
    var testValue = (randomGuess ** 2).toFixed(10);

    if (testValue == value) {
        return randomGuess;
    } else {
        return square_root(value, ((value / randomGuess) + randomGuess) / 2);
    }
}

function loopSqrt(loopCounts) {
    // test function to loop through 1 to loopCounts and calculate all the square roots

    var loopObject = {}, sqrt;

    for (let i = 1; i <= loopCounts; i++ ) {
        sqrt = square_root(i);
        loopObject[i] = sqrt;
    }

    return loopObject;
}