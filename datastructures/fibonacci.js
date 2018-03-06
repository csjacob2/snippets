$(document).ready(function() {
    testFibonacci(6);
});


function testFibonacci(n) {
    console.log('With a loop: ' + fibonacci(n));
    console.log('Recursively: ' + fibonacciR(n));
    console.log('Array of values:' + fibonacciList(n));
}


// recursive fibonacci
// but runtime is O(2^n)
function fibonacciR(n) {
    if (n <= 1)
        return 1;

    return fibonacciR(n - 1) + fibonacciR(n - 2);
}

// loop fibonacci
// calculate next number by adding current number to old number
// runtime O(n)
function fibonacci(n){
    var a = 0, b = 1, fibo = 1;

    for(var i = 2; i <= n; i++) {
        fibo = a + b;
        a = b;
        b = fibo;
    }
    return fibo;
}

function fibonacciList(n) {
    var array = [1, 1];

    for (var i = 2; i < n; i++) {
        array.push(array[i-1]+array[i-2]);
    }

    return array;
}