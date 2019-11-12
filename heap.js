class Heap {
  constructor(comparator = (x, y) => x > y) {
    this.storage = [];
    this.comparator = comparator;
  }

  getPriority() {
    if (this.getSize() === 0) return Error('Heap is empty.');
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  removePriority() {
    if (this.getSize() === 0) return Error('Heap is empty.');
    [this.storage[0], this.storage[this.getSize() - 1]] = [
      this.storage[this.getSize() - 1],
      this.storage[0]
    ];

    let deleted = this.storage.pop();
    this.siftDown(0);
    return deleted;
  }

  insert(value) {
    this.storage.push(value);
    this.bubbleUp(this.getSize() - 1);
  }

  bubbleUp(index) {
    let parent = Math.ceil((index - 2) / 2);
    while (
      index > 0 &&
      this.comparator(this.storage[index], this.storage[parent])
    ) {
      [this.storage[index], this.storage[parent]] = [
        this.storage[parent],
        this.storage[index]
      ];
      index = parent;
    }
  }

  siftDown(index) {
    let parent = index;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;

    while (
      this.getSize() + 1 > leftChildIndex &&
      this.comparator(this.storage[leftChildIndex], this.storage[parent])
    ) {
      parent = leftChildIndex;
    }

    if (
      this.getSize() > leftChildIndex &&
      this.comparator(this.storage[leftChildIndex], this.storage[parent])
    ) {
    } else if (
      this.getSize() > rightChildIndex &&
      this.comparator(this.storage[rightChildIndex], this.storage[parent])
    ) {
      parent = rightChildIndex;
    } else if (parent !== index) {
      [this.storage[index], this.storage[parent]] = [
        this.storage[parent],
        this.storage[index]
      ];
      this.siftDown(parent);
    }
  }
}

const exampleHeap = new Heap();

exampleHeap.insert(6);
exampleHeap.insert(8);
exampleHeap.insert(10);
exampleHeap.insert(9);
exampleHeap.insert(1);
exampleHeap.insert(9);
exampleHeap.insert(9);
exampleHeap.insert(5);

console.log(exampleHeap.storage); // [ 10, 9, 9, 6, 1, 8, 9, 5 ]

console.log(exampleHeap.getPriority()); // 10

console.log(exampleHeap.removePriority()); // 10

console.log(exampleHeap.storage); // [ 10, 9, 9, 6, 1, 8, 9, 5 ]

console.log(exampleHeap.getSize()); // 7

console.log(exampleHeap.getPriority()); // 9
