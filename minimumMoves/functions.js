$(document).ready(function(){

    /*
    //Given two sets of arrays, what are the minimum number of moves to make each number in the array match the other array?
    // if array1 == [123] and array2 == [345], then it would take 6 moves to make array1 == array2
    // NOTE: there can be more than one element in each array!
    */

    var a = [1234, 4321];
    var m = [2345, 3214];

    minimumMoves(a, m);
});


function minimumMoves(a, m) {
    var arrayLength = a.length;
    var minMoves = 0;
    var tempValArrayA, tempValArrayM = [];

    for (var i = 0; i < arrayLength; i++) {

        tempValArrayA = (''+a[i]).split("");
        tempValArrayM = (''+m[i]).split("");

        for (var j = 0; j < tempValArrayA.length; j++) {
            minMoves += Math.abs(tempValArrayA[j] - tempValArrayM[j]);
        }
    }
    console.log(minMoves);
}
