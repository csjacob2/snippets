$(document).ready(function() {
    testBinarySearch();
});


function testBinarySearch() {
    var key = 35;
    var key2 = 12;
    var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    console.log('Searching: ' + binarySearch(key, testArray));
    console.log('Searching: ' + binarySearch(key2, testArray));
}


// search - binary
// divide and conquer, split the array
// array must be sorted
// run time O(log n)
function binarySearch(key, array){
    var start = 0,
        end = array.length-1,
        middle;

    while (start <= end) {
        // find the midpoint (MP) of the search range based on start and end points
        middle = start + (end - start) / 2;

        //round up from decimal place
        if ((middle % 1) > 0) {
            middle = Math.ceil(middle);
        }

        if (key < array[middle]) {
            //if search key is lower than MP, move end to MP (shrinking search space to lower range)
            end = middle - 1;
        } else if (key > array[middle]) {
            //if search key is higher than MP, move start to MP (shrinking search space to higher range)
            start = middle + 1;
        } else {
            //search key found
            return true;
        }
    }

    // search key not found since start and end points collided (start > end)
    return false;
}