/*
Challenge 1

Fibonacci Number Sequence:

F(0) = 0
F(1) = 1
F(N) = F(N-1) + F(N-2)

   1  2  3  4  5  6  7   8   9   10
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fib(n) {
	//return nth term of the fibonacci sequence
	//fill in code
}

1. Solved using a technique called memoization, which I've recently been reading into as a form of dynamic programming. This technique breaks down repetitive tasks, that are historically solved using loops or recursion, into small subproblems and stores the answer (either in a matrix or array or similar structure such as the Map prototype) and instead of solving it each time on each iteration, it retrieves the solution from storage and uses it as part of the next step or returns it. It is extremely useful when having to calculate large permutations with O(2^n) run time.

2. This algorithm runs at a constant speed of O(2n).

3. One drawback of memoization is that it's a bit more complex to follow, as compared to standard looping, but once the concepts behind it are understood, and when to apply it, it makes code run extremely fast.

*/

$(document).ready(function(){
    var calcFibo = 10;
	var numInSequence = fibonacci(calcFibo);

    $('body div').append('The fiboacci value at ' + calcFibo + ' location is: ' + numInSequence);
    console.log('The fiboacci value at ' + calcFibo + ' location is: ' + numInSequence);
});


function fibonacci(n) {
    var fibonacciArray = new Array(n.length);

	// value calculated, return
	if (fibonacciArray[n])
		return fibonacciArray(n);
	// base case 0
	if (n == 0)
		return 0;
	// base case 1
	if (n == 1)
		return 1;

	//return next value in the array based on two previously calculated values
	return fibonacciArray[n] = fibonacci(n-1) + fibonacci(n-2);
}