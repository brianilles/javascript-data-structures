class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  insertAfter(value) {
    let curr_next = this.next;
    this.next = new Node(value, this, curr_next);
    curr_next && (curr_next.prev = this.next);
  }

  insertBefore(value) {
    let curr_prev = this.prev;
    this.prev = new Node(value, curr_prev, this);
    curr_prev && (curr_prev.next = this.prev);
  }

  delete() {
    this.prev && (this.prev.next = this.next);
    this.next && (this.next.prev = this.prev);
  }
}

class DoublyLinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.length = node ? 1 : 0;
  }

  length() {
    return this.length;
  }

  addToHead(value) {
    let newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head.prev.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  removeFromHead() {
    if (!this.head && !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      let oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return oldHead.value;
    } else {
      let oldHead = this.head;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length -= 1;
      return oldHead.value;
    }
  }

  addToTail(value) {
    let newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.insertAfter(value);
      this.tail = this.tail.next;
      this.length += 1;
    }
  }

  removeFromTail() {
    if (!this.head && !this.tail) {
      return null;
    } else if (this.head === this.tail) {
      let oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return oldTail.value;
    } else {
      let oldTail = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length -= 1;
      return oldTail.value;
    }
  }

  moveToFront(node) {
    if (node === this.head) {
      return;
    }
    node.prev.next = node.next;
    if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      node.next.prev = node.prev;
    }
    this.head.prev = node;
    node.prev = null;
    node.next = this.head;
    this.head = node;
  }

  moveToEnd(node) {
    if (node === this.tail) {
      return;
    }
    node.next.prev = node.prev;
    if (node === this.head) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
    }
    this.tail.next = node;
    node.next = null;
    node.prev = this.tail;
    this.tail = node;
  }

  delete(node) {
    if (this.head === node) {
      this.removeFromHead();
    } else if (this.tail === node) {
      this.removeFromTail();
    } else {
      node.delete();
      this.length -= 1;
    }
  }

  getMax() {
    if (!this.head && !this.tail) {
      return None;
    }
    let currentMax = this.head.value;
    let current = this.head;
    while (current) {
      if (current.value > currentMax) {
        currentMax = current.value;
      }
      current = current.next;
    }
    return currentMax;
  }
}

exampleDoublyLinkedList = new DoublyLinkedList();

exampleDoublyLinkedList.addToTail('a');
exampleDoublyLinkedList.addToTail('b');
exampleDoublyLinkedList.addToTail('c');
exampleDoublyLinkedList.addToTail('d');
exampleDoublyLinkedList.addToTail('e');
exampleDoublyLinkedList.addToTail('f');

console.log(exampleDoublyLinkedList); // DoublyLinkedList {...}

console.log(exampleDoublyLinkedList.removeFromHead());
console.log(exampleDoublyLinkedList.removeFromTail());
console.log(exampleDoublyLinkedList.getMax());

console.log(exampleDoublyLinkedList); // DoublyLinkedList {...}

function logList(head) {
  let current = head;
  let list = [];
  while (current) {
    list.push(current.value);
    current = current.next;
  }
  return `${list.join(' <-> ')}`;
}

console.log(logList(exampleDoublyLinkedList.head)); // b <-> c <-> d <-> e

exampleDoublyLinkedList.moveToFront(exampleDoublyLinkedList.tail);

console.log(logList(exampleDoublyLinkedList.head)); // e <-> b <-> c <-> d

exampleDoublyLinkedList.moveToEnd(exampleDoublyLinkedList.head.next);

console.log(logList(exampleDoublyLinkedList.head)); // e <-> c <-> d <-> b

console.log(exampleDoublyLinkedList); // DoublyLinkedList {...}
