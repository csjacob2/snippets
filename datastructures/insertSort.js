$(document).ready(function() {
    testInsertSort();
});


function testInsertSort() {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    console.log(insertSort(array));
}


// sort - insert
function insertSort(array) {
    var arrayLength = array.length;
    var temp, j;

    for (var i = 0; i < arrayLength; i++) {
        temp = array[i];

        for(j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;

    }
    return array;
}
