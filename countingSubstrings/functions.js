/*
 Given a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

 Substrings that occur multiple times are counted the number of times they occur.

egs:
input:  00110
output:  3

input: 10101
output: 4

input: 10001
output: 2

*/

$(document).ready(function(){
    console.log(counting('00110'));
    console.log(counting('10101'));
    console.log(counting('10001'));
});

function counting(s) {

    let sLength = s.length;
    let count = 0;
    let previousCount = 0;
    let currentCount = 1;

    for (let i = 1; i < sLength; i++) {
        if (s.charAt(i-1) != s.charAt(i)) {
            count += Math.min(previousCount, currentCount);
            previousCount = currentCount;
            currentCount = 1;
        } else {
            currentCount++;
        }
    }
    return count + Math.min(previousCount, currentCount);
}