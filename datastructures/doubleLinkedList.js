$(document).ready(function() {
    testDoubleLinkedList();
});


function testDoubleLinkedList() {
    var newDLL = new doubleLinkedList();

    newDLL.add('foo');
    newDLL.add('bar');
    newDLL.add('bip');
    newDLL.add('baz');
    newDLL.add('flub');
    newDLL.add('pif');
    console.log(newDLL);

    console.log('getting null value: ' + newDLL.get('eek'));
    console.log('getting existing value: ' + newDLL.get('bip'));
    console.log('deleting foo: ' + newDLL.deleteNode('foo'));  //head node
    console.log('deleting baz: ' + newDLL.deleteNode('baz'));  //mid node
    console.log('deleting non: ' + newDLL.deleteNode('argle'));  //non existing
    console.log('deleting pif: ' + newDLL.deleteNode('pif'));  //last node
    console.log(newDLL);
}


// double linked list
class doubleLinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    add(value) {
        var node = {'data': value,
            'next': null,
            'previous': null};

        if (this.size == 0) {
            // first node, point head to it
            this.head = node;
            this.tail = node;
        } else {
            // link to last node in the chain
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    get(value) {
        //linear search for the value, need to start at the head
        var node = this.head;

        while (node.data != value) {
            if (node.next == null) {
                return null
            }
            node = node.next;
        }
        return node.data;
    }

    deleteNode(value) {
        var node = this.head;
        var prevNode, afterNode; //node to track before deleted node

        while (this.get(node.data) != value) {
            if (node.next == null || this.size == 0) {
                return null;
            }
            prevNode = node;
            node = node.next;
        }

        if (node == this.head) {
            // delete first node, reset head
            this.head = node.next;
            if (this.head) {
                // second node, link back to new head
                this.head.previous = null;
            } else {
                // no second node, down to LL of size 1
                this.tail = null;
            }
        } else if (node == this.tail) {
            // delete last node, reset tail
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            // delete middle node
            prevNode = node.previous;
            afterNode = node.next;

            prevNode.next = afterNode;
            afterNode.previous = prevNode;
        }

        this.size--;
        return value;
    }
}
