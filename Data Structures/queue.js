// Implement a queue class structure

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    // create a new node to the end of the list
    let newNode = new Node(val);
    // if the list has no values
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // remove the node from beginning of the list
    if (this.length === 0) return undefined;
    let removed = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  print() {
    var arr = [];
    var current = this.first;
    while (current) {
      arr.enqueue(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var a = new Queue();
a.enqueue(1);
a.print();
a.enqueue("hi");
a.print();
a.enqueue(999);
a.print();
a.dequeue();
a.print();
a.dequeue();
a.print();
a.dequeue();
