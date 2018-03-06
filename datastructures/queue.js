$(document).ready(function() {
    testQueue();
    testReverseQueue();
});


function testQueue() {
    // create a new queue object
    var newQueue = new queue();

    // push values 3, 5, 1 to stack
    newQueue.enqueue(3);
    newQueue.enqueue(5);
    console.log('Peek! ' + newQueue.peek());
    newQueue.enqueue(1);

    // pop and display each item in the stack, stop popping when stack is empty
    while (newQueue.size != 0) {
        console.log('Dequeing! ' + newQueue.dequeue());
    }
    if (newQueue.size == 0) {
        console.log('Empty queue!');
    }
}

function testReverseQueue() {
    // create a new queue object
    var newQueue = new queue();

    // push values to queue
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    newQueue.enqueue(6);
    newQueue.enqueue(7);
    newQueue.reverseQ();

    // pop and display each item in the queue, stop popping when queue is empty
    while (newQueue.size != 0) {
        console.log('Dequeing! ' + newQueue.dequeue());
    }
}


// queue
class queue {
    constructor() {
        // object constructor - create the queue
        this.size = 0;
        this.queue = new Array();
    }

    enqueue(n) {
        // object method - add an item to the queue
        this.queue[this.size] = n;
        this.size++
    }

    dequeue() {
        //object method - remove the last inserted item from the stack
        // if the stack is empty, return null
        // need to catch empty stack in main code
        if (this.size.length == 0)
            return null;

        this.size--;
        var dequeuedValue = this.queue.shift();
        return dequeuedValue;
    }

    peek() {
        if (this.size.length == 0)
            return null;
        else {
            var top = this.size-1;
            return this.queue[top];
        }
    }

    reverseQ() {
        // reverse within the same array
        var tempvar, queueLength = this.size-1;

        for (let i = 0, j = queueLength; i <= queueLength, i <= j; i++, j--) {
            tempvar = this.queue[i];
            this.queue[i] = this.queue[j];
            this.queue[j] = tempvar;
        }
    }
}
