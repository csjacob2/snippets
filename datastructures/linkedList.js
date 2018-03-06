$(document).ready(function() {
    testLinkedList();
});


function testLinkedList() {
    var newLinkedList = new linkedList();

    newLinkedList.add('foo');
    newLinkedList.add('bar');
    newLinkedList.add('bip');
    newLinkedList.add('baz');
    newLinkedList.add('flub');
    newLinkedList.add('pif');
    console.log(newLinkedList);
    console.log('getting null value: ' + newLinkedList.get('eek'));
    console.log('getting existing value: ' + newLinkedList.get('pif'));
    console.log('deleting foo: ' + newLinkedList.deleteNode('foo'));  //head node
    console.log('deleting baz: ' + newLinkedList.deleteNode('baz'));  //mid node
    console.log('deleting non: ' + newLinkedList.deleteNode('argle'));  //non existing
    console.log('deleting pif: ' + newLinkedList.deleteNode('pif'));  //last node
    console.log(newLinkedList);
}


// linked list
class linkedList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    add(value) {
        var node = {'data': value,
            'next': null};

        if (this.size == 0) {
            // first node, point head to it
            this.head = node;
        } else {
            // link to last node in the chain
            this.tail.next = node;
        }

        this.tail = node; //point to node
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
        var prevNode; //node to track before deleted node

        while (this.get(node.data) != value) {
            if (node.next == null) {
                return null;
            }
            prevNode = node;
            node = node.next;
        }

        if (node == this.head) {
            // delete first node, reset head
            this.head = node.next;
        } else if (node == this.tail) {
            // delete last node, reset tail
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            // delete middle node
            prevNode.next = node.next;
        }

        this.size--;
        return value;
    }
}
