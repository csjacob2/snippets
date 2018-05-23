$(document).ready(function(){
    const originalArray = [ 1, 2, 3, 4, 5, 6 ];
    let newArray = reverseArray(originalArray);

    console.log(`Original array: ${originalArray}`);
    console.log(`Reversed new array: ${newArray}`);
    console.log(`Reversed inline array: ${reverseSameArray(originalArray)}`);


    let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`Before shuffle:`, sortedArray);
    shuffle(sortedArray);
    console.log(`After shuffle:`, sortedArray);

    console.log(expandRandom());
});


/*
 // Question 1
 // Implement a function to reverse an array
 // For example reverse( [1,2,3,4,5] ) should return [5,4,3,2,1]

 // two functions to do this
 // function1 creates a new array with the reversed values in it
 // function2 swaps the values in the same array and returns the original array as modified
 //     tested with an even and odd number of values in the array to ensure it doesn't break when the two counters meet
 */

function reverseArray(array) {
    // reverse into a new array
    var rArray = [];
    var arrayLength = array.length-1;

    for (let i = arrayLength; i >= 0; i--) {
        rArray.push(array[i]);
    }

    return rArray;
}

function reverseSameArray(array) {
    // reverse within the same array
    const arrayLength = array.length-1;

    for (let i = 0, j = arrayLength; i <= arrayLength, i <= j; i++, j--) {
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const getRandom = (floor, ceiling) => Math.floor(Math.random() * (ceiling - floor + 1)) + floor;

function shuffle(array) {

    let randomValue;

    for (let index = 0; index < array.length; index++) {
        randomValue = getRandom(index, array.length - 1);
        [array[index], array[randomValue]] = [array[randomValue], array[index]]
    }
}


function expandRandom() {
    /* Expand a random range from 0-5 to 0-7. Given a function rand5() that returns a random float in the range [0,5] with a uniform distribution, write a function that returns a random float in the range [0,7] using only rand5() and keeping a uniform distribution. */

    // this is building an array of the values from 0-7 (with two null values of -1) in a 2D grid of 6x6 values (representing 0-5 slots) and essentially randomizes choosing one value from anywhere in the grid (discarding and rechoosing if one of the null values is picked)

    const arraySeven = [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 0, 1, 2, 3],
        [3, 4, 5, 6, 7, 0],
        [0, 1, 2, 3, 4, 5],
        [6, 7, 0, 1, 2, 3],
        [4, 5, 6, 7, -1, -1]
    ];

    let answer = -1, i, j;

    while (answer == -1) {
        //generate a random number between 0-5 for i and j
        i = Math.floor((Math.random() * 5));
        j = Math.floor((Math.random() * 5));

        // choose a spot in the array based on ixj
        answer = arraySeven[i][j];
    }
    return answer;
}

