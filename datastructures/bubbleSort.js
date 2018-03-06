$(document).ready(function() {
    testBubbleSort();
});


function testBubbleSort() {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    console.log(bubbleSort(array));
}


// sort - bubble
function bubbleSort(array) {
    var temp;
    var arrayLength = array.length;

    for (var i = 0; i <= arrayLength; i++) {
        //Number of passes
        for (var j = 0; j < arrayLength; j++) {
            //Compare the adjacent positions
            if (array[j] < array[j-1]) {
                //Swap the numbers
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    return array;
}