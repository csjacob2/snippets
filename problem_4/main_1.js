/*
 // Question 1
 // Implement a function to reverse an array
 // For example reverse( [1,2,3,4,5] ) should return [5,4,3,2,1]

 // two functions to do this
 // function1 creates a new array with the reversed values in it
 // function2 swaps the values in the same array and returns the original array as modified
 //     tested with an even and odd number of values in the array to ensure it doesn't break when the two counters meet
*/

$(document).ready(function(){
    const originalArray = [ 1, 2, 3, 4, 5, 6 ];
    var newArray = reverseArray(originalArray);

    console.log(`Original array: ${originalArray}`);
    console.log(`Reversed new array: ${newArray}`);
    console.log(`Reversed inline array: ${reverseSameArray(originalArray)}`);
});

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
    var tempvar, arrayLength = array.length-1;

    for (let i = 0, j = arrayLength; i <= arrayLength, i <= j; i++, j--) {
        tempvar = array[i];
        array[i] = array[j];
        array[j] = tempvar;
    }
    return array;
}