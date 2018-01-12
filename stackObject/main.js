/*
Challenge 2

MaxStack class - all functions should be O(1)

class MaxStack {
	push(n) {

	}

	pop() {

	}

	max() {
		//return largest element in stack
	}
}

1. Solved by creating the stack as an object with a constructor function and supporting methods (push, pop, max). The pop function returns a null value if the stack is empty, so the main code calling pop() will need to catch and display a message if null is returned.

2. Each function (constructor and methods) are O(1) as they have no loops or recursive calls involved and execute from top to bottom once for each time they're called.

3. To view the output, run the index.html file in a browser, launch developer tools (F12 in Chrome, CTRL-SHIFT-I in Firefox, or Google for your relevant browser/OS) and select "Console" from the top bar. Output should show the max value first (5) and then the popped values in order (1, 5, 3), followed by "Empty stack".

*/

$(document).ready(function(){
    
	// create a new Stack object
	var newStack = new MaxStack();

	// push values 3, 5, 1 to stack
	newStack.push(3);
	newStack.push(5);
	newStack.push(1);

	// display max value in stack
	console.log('The max value in the stack is: ' + newStack.max());

	// pop and display each item in the stack, stop popping when stack is empty
	while (newStack.size != 0) {
		console.log('Popping! ' + newStack.pop());
	}
	if (newStack.size == 0) {
		console.log('Empty stack!');
	}
});


function MaxStack() {
	// object constructor - create the stack
	this.size = 0;
	this.stack = new Array();
}

MaxStack.prototype.push = function(n) {
	// object method - add an item to the stack
	
	this.stack[this.size] = n;
	this.size++
}

MaxStack.prototype.pop = function() {
	//object method - remove the last inserted item from the stack
	// if the stack is empty, return null
	// need to catch empty stack in main code

	if (this.size.length == 0)
		return null;
	
	this.size--;
	var poppedValue = this.stack[this.size];
	return poppedValue;
}

MaxStack.prototype.max = function() {
	//object method - return largest value in the stack
	// uses Function.prototype.apply Global Object method inheritance 
	//  to apply the max function to an array and locate the max value
	return Math.max.apply(null, this.stack)
}