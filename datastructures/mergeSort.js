$(document).ready(function() {
    testMergeSort();
});


function testMergeSort() {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    console.log(mergeSort(array));
}


// sort - merge
function mergeSort (array) {
    if (array.length === 1) {
        // return once we hit an array with a single item
        return array
    }

    const middle = Math.floor(array.length / 2);        // get the middle item of the array rounded down
    const left = array.slice(0, middle);                // items on the left side
    const right = array.slice(middle);                  // items on the right side

    return merge(
        mergeSort(left), mergeSort(right)
    )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++
        } else {
            result.push(right[indexRight]);
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}