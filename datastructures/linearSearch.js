$(document).ready(function() {
    testLinearSearch();
});


function testLinearSearch() {
    var key = 8;
    var key2 = 4;
    var testArray = [1, 2, 3, 4, 5, 6, 7];

    console.log('Searching: ' + linearSearch(key, testArray));
    console.log('Searching: ' + linearSearch(key2, testArray));
}


// search - linear
// traverse array from beginning to end, can return t/f or index of array
// pro: array doesn't have to be sorted
// runtime: O(n)
function linearSearch(key, array){
    var arrayLength = array.length;

    for (var i = 0; i < arrayLength; i++) {
        if (key === array[i]) {
            return true;
        }
    }
    return false;
}