// implement the stack data structure

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // adds a new node to beginning of the list
  // for the benefits of constant time
  push(val) {
    //   create a new node
    let newNode = new Node(val);
    // if there are no nodes in the list
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // otherwise add a new node to the beginning
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    // increment the length
    this.length++;
    return this;
  }
  pop() {
    //   if there are no nodes in the list, return undefined
    if (!this.first) return undefined;
    let removed = this.first;
    // if there is only 1 node in the list
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    // decrement the length
    this.length--;
    return removed;
  }
}
