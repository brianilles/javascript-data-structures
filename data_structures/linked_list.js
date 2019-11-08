class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getNext() {
    return this.nextNode;
  }

  setNext(newNext) {
    this.nextNode = newNext;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head && !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      let oldHead = this.head;
      this.head = null;
      this.tail = null;
      return oldHead.getValue();
    } else {
      let oldHead = this.head;
      this.head = oldHead.getNext();
      return oldHead.getValue();
    }
  }

  contains(target) {
    if (!this.head && !this.tail) {
      return false;
    } else {
      let current = this.head;
      while (current) {
        if (current.getValue() === target) {
          return true;
        }
        current = current.getNext();
      }
      return false;
    }
  }
}

const exampleLinkedList = new LinkedList();

exampleLinkedList.addToTail('a');
exampleLinkedList.addToTail('b');
exampleLinkedList.addToTail('c');
exampleLinkedList.addToTail('d');

console.log(exampleLinkedList); // LinkedList {...}
console.log(exampleLinkedList.contains('b')); // true
console.log(exampleLinkedList.removeHead()); // a
console.log(exampleLinkedList.contains('a')); // false
console.log(exampleLinkedList); // LinkedList {...}
