const SLL = require('./linkedList');

const main = () => {
    const myLinkedList = new SLL();

    myLinkedList.insertFirst('Apollo');
    myLinkedList.insertLast('Boomer');
    myLinkedList.insertLast('Helo');
    myLinkedList.insertLast('Husker');
    myLinkedList.insertLast('Starbuck');
    myLinkedList.insertLast('Tauhida');

    myLinkedList.remove('Husker');
}

main();