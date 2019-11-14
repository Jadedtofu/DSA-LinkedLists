const LinkedListNode = require('./LinkedListNode');

class SLL {
    constructor() {
        this.head = null,
        this.size = 0;
    }

    insertFirst(item) {
        this.head = new LinkedListNode(item, this.head);
        this.size++;
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }

        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new LinkedListNode(item, null);
            this.size++;
        }
    }

    remove(item) {
        if (!this.head) {  // if list is empty
            return null;
        }

        if(this.head.value === item) {
            // if node removed is head, make this the next node head
            this.head = this.head.next;
            return;
        }

        let current = this.head; // start at head
        let previous = this.head;  // keep track of previous

        while ((current !== null) && (current.value !== item)) {
            previous = current;
            current = current.next;
        }
        if (current === null) {
            console.log('Item not found');
            return;
        }
        previous.next = current.next;
    }

    find(item) {
        let current = this.head;
        if (!this.head) {
            return null;
        }
        while (current.value !== item) {
            if(current.next === null) {
                return null;
            }
            else {
                current = current.next;
            }
        }
        return current;
    }

}

module.exports = SLL;