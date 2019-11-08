class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.size() > 0) {
      return this.stack.pop();
    } else {
      return null;
    }
  }

  size() {
    return this.stack.length;
  }
}

const exampleStack = new Stack();

exampleStack.push('a');
exampleStack.push('b');
exampleStack.push('c');
exampleStack.push('d');

console.log(exampleStack); // Stack { stack: [ 'a', 'b', 'c', 'd' ] }
console.log(exampleStack.pop()); // d
console.log(exampleStack.size()); // 3
console.log(exampleStack); // Stack { stack: [ 'a', 'b', 'c' ] }
