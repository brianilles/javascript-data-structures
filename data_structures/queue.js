class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (this.size() > 0) {
      return this.queue.shift();
    } else {
      return null;
    }
  }

  size() {
    return this.queue.length;
  }
}

const exampleQueue = new Queue();

exampleQueue.enqueue('a');
exampleQueue.enqueue('b');
exampleQueue.enqueue('c');
exampleQueue.enqueue('d');

console.log(exampleQueue); // Queue { queue: [ 'a', 'b', 'c', 'd' ] }
console.log(exampleQueue.dequeue()); // a
console.log(exampleQueue.size()); // 3
console.log(exampleQueue); // Queue { queue: [ 'b', 'c', 'd' ] }
