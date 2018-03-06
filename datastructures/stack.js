$(document).ready(function() {
    testStack();
});


function testStack() {
    // create a new Stack object
    var newStack = new MaxStack();

    // push values 3, 5, 1 to stack
    newStack.push(3);
    newStack.push(5);
    console.log('Peek! ' + newStack.peek());
    newStack.push(1);

    // pop and display each item in the stack, stop popping when stack is empty
    while (newStack.size != 0) {
        console.log('Popping! ' + newStack.pop());
    }
    if (newStack.size == 0) {
        console.log('Empty stack!');
    }
}


// stack
class stack {
    constructor() {
        // object constructor - create the stack
        this.size = 0;
        this.stack = new Array();
    }

    push(n) {
        // object method - add an item to the stack
        this.stack[this.size] = n;
        this.size++
    }

    pop() {
        //object method - remove the last inserted item from the stack
        // if the stack is empty, return null
        // need to catch empty stack in main code
        if (this.size.length == 0)
            return null;

        this.size--;
        return this.stack[this.size];
    }

    peek(){
        // view the top item without removing it
        if (this.size.length == 0)
            return null;
        else {
            var top = this.size-1;
            return this.stack[top];
        }
    }
}