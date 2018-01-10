/*
 You are provided the flip function:

 You must implement a randomNumber(n) function that generates a random number
 greater than or equal to 0, and less than input n .
 * n must be greater than 0
 * n must be less than 1,000,000
 * Your only source of randomness must be the provided flip() function
 * You cannot use Math.random in your implementation
 * You can use Google to figure out how to do this
*/

$(document).ready(function(){
    const maxValue = 100;
    var rando = randomNumber(maxValue);

    console.log(`A random value between 0 and ${maxValue}: ${rando}`);

    const distRun = 100;
    var distCount  = calculateDistribution(distRun, maxValue);

    console.log(`The object showing the counts of each random value (run ${distRun}): ` );
    console.log(distCount);
});


function randomNumber (n) {
    // Returns a number between [0, n) using the flip() function

    const lengthOfBinary = n.toString(2).length;

    if (n <= 0 || n >= 1000000) {
        return 'Value out of range!'
    }

    do {
        var randomString = '';
        for (let i = 1; i <= lengthOfBinary; i++) {
            // assign 1/0 based on flip() results of T/F and build random binary string
            randomString += flip() ? 1 : 0;
        }
    } while (parseInt(randomString,2) >= n);

    //convert back to decimal
    return parseInt(randomString, 2);
}

function flip() {
    return Math.random() >= 0.5;
}

function calculateDistribution(runCount, randoVal) {
    // test the distribution to see if it's reasonable
    var countDistribution = {};
    var rando = 0;

    for (let i = 1; i <= runCount; i++) {
        rando = randomNumber(randoVal);
        //rando = flip();  //quick test to see how evenly distributed flip is

        if (rando in countDistribution) {
            countDistribution[rando]++;
        } else {
            countDistribution[rando] = 1;
        }
    }
    return countDistribution;
}