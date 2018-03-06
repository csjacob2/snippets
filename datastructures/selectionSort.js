$(document).ready(function() {
    testSelectionSort();
});


function testSelectionSort() {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    console.log(selectionSort(array));
}


// sort - selection
function selectionSort(array){
    var arrayLength = array.length;
    var minimum, temp;

    for (var i = 0; i < arrayLength; i++){

        //set minimum to this position
        minimum = i;

        //check the rest of the array to see if anything is smaller
        for (var j = i+1; j < arrayLength; j++) {
            if (array[j] < array[minimum]){
                minimum = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != minimum){
            temp = array[i];
            array[i] = array[minimum];
            array[minimum] = temp;
        }
    }
    return array;
}


