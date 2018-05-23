$(document).ready(function() {
    console.log(stringReverse('reverse this string'));
    console.log(findAllAnagrams('plates'));

    console.log(add(10)(20));
    console.log(sum(1, 3, 5, 6, 7));
});


function isPalindrome(string) {
    // determine if a string is a palindrome

    string = string.replace(/\W/g, '').toLowerCase();
    return (string == string.split('').reverse().join(''));
}

const isPalindromeES6 = (string) => {
    string.replace(/\W/g, '').toLowerCase();
    return (string == string.split('').reverse().join(''));
}


function firstUnique(string) {
    //find the first occurring unique letter in a string of characters

    let searchChar;

    for (let i = 0; i < string.length; i++) {
        searchChar = string.charAt(i);

        // look for any incidents of the searchChar in the string *after* the first occurrence
        // indexOf returns -1 if it didn't find another occurrence
        if (string.indexOf(searchChar) == i && string.indexOf(searchChar, i+1) == -1) {
            return searchChar;
        }
    }
    return null;
}


function stringReverse(string) {
    //reverse the words in a string
    // but do not reverse the string itself
    // 'reverse this string' == 'esrever siht gnirts'

    let temp = [];
    let finalString = [];

    let arrayString = string.split(' ');
    for (let i = 0; i < arrayString.length; i++) {
        temp = arrayString[i].split('').reverse().join('');
        finalString.push(temp);
    }
    return (finalString.join(' '));
}


function duplicates(string) {
    //find the duplicate letters in a string

    let charCount = {};
    const arrayString = string.split('');

    for (let element of arrayString) {
        element = element.toLowerCase();

        if (element != ' ') {
            if (element in charCount) {
                charCount[element]++;
            } else {
                charCount[element] = 1;
            }
        }
    }

    for (let key in charCount) {
        if (charCount[key] == 1) {
            delete charCount[key];
        }
    }

    return charCount;
}


function testReduceAvg() {
    // using reduce function, calculate the average of an array

    const array = [123, 1235, 231, 5473, 1200];

    const average = array.reduce((total, amount, index, array) => {
        total += amount;
        if (index === array.length-1)
            return total/array.length;  // this happens when the reduce loop hits the end (index == array.length-1) so we need to calculate average
        else
            return total;   // need to return total in this reduce loop to keep adding
    });
    return average;
}

function testReduceAvg2() {
    // using reduce function, calculate the average of an array in a different method
    // this uses the optional value of an empty array passed as the initial value

    const array = [123, 1235, 231, 5473, 1200];

    const average = array.reduce((total, amount) => {
        total.push(amount * 2);
        return total;
    }, []);
    return average;
}

function sumReduce() {
    //using reduce function and fat arrow, calculate the sum of an array

    const array = [123, 1235, 231, 5473, 1200];
    const sum = array.reduce((subtotal, val) => subtotal + val, 0);
    return sum;
}

function sum(...n) {
    //using reduce function and fat arrow, calculate the sum of an unknown value of args

    const total = n.reduce((subtotal, val) => subtotal + val, 0);
    return total;
}



// demonstrate a closure to add two values;
function add(a) {
    return function (b) {
        return a + b;
    }
}


function fizzbuzz() {
    let output;

    for (let i = 1; i <= 100; i++) {
        output = '';

        if (i % 3 == 0) {
            output += 'Fizz';
        }

        if (i % 5 == 0) {
            output += 'Buzz';
        }

        console.log(output || i);
    }
}


// given a word, find any anagrams of that word from an array and return the results
// plates -> pleats, staple, pastel, ...
const ALL_WORDS = ['car', 'pleats', 'arc', 'pastel', 'color', 'picture', 'curtains', 'staple'];

// main function
function findAllAnagrams(word) {
    let foundAnagrams = [];

    for (let element of ALL_WORDS) {
        if (isAnagram(element, word)) {
            foundAnagrams.push(element);
        }
    }
    return foundAnagrams;
}

//test function to compare two words
function isAnagram(word, otherWord) {
    return (sortedLetters(word) === sortedLetters(otherWord));
}

// helper function to sort letters
// this makes both words (potentially) equal to each other
function sortedLetters(word) {
    return word.split('').sort().join('');
}