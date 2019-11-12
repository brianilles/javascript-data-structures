class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    let node = this;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = target < node.value ? node.left : node.right;
    }
    return false;
  }

  getMax() {
    let maxValue = this.value;
    while (true) {
      if (this.value > maxValue) {
        maxValue = this.value;
      }
      if (this.right) {
        if (this.right.value > maxValue) {
          maxValue = this.right;
          return this.right.getMax();
        }
      }
      if (this.left && !this.right) {
        if (this.left.value > maxValue) {
          maxValue = this.left.value;
          return this.left.getMax();
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return maxValue;
  }

  forEvery(cb) {
    cb(this.value);
    if (this.right) {
      this.right.forEvery(cb);
    }
    if (this.left) {
      this.left.forEvery(cb);
    }
  }
}

exampleBinarySearchTree = new BinarySearchTree(10);
exampleBinarySearchTree.insert(4);
exampleBinarySearchTree.insert(-50);
exampleBinarySearchTree.insert(-3);
exampleBinarySearchTree.insert(300);
exampleBinarySearchTree.insert(65);
exampleBinarySearchTree.insert(33);
exampleBinarySearchTree.insert(21);
exampleBinarySearchTree.insert(8);
exampleBinarySearchTree.insert(0);

exampleBinarySearchTree.forEvery(val => console.log(val * 10));

console.log(exampleBinarySearchTree.contains(-52)); // false
console.log(exampleBinarySearchTree.contains(21)); // true

console.log(exampleBinarySearchTree.getMax()); // 300

console.log(exampleBinarySearchTree); // BinarySearchTree {...}
