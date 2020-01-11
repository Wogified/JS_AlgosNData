// implement doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //   add a node to the end of the list
  push(val) {
    // create a new node
    let newNode = new Node(val);
    // if the list is empty set the new node to be the head
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the next prop of the prev tail to be the new node
      this.tail.next = newNode;
      // Set the prev prop of the new node to be the prev tail
      newNode.prev = this.tail;
      // set the tail to be the new node
      this.tail = newNode;
    }
    // increment the length of the list
    this.length++;
    return this;
  }
  //   remove a node from the end of the list
  pop() {
    //   if the list has no elements, return undefined
    if (!this.head) return undefined;
    // store the node to be removed
    let removed = this.tail;
    // if there is only one element in the list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set the tail to be the removed node's prev node
      this.tail = removed.prev;
      // set the tail's next prop to be null
      this.tail.next = null;
    }
    // decrement the length
    this.length--;
    // return the removed node
    return removed;
  }
  //   remove a node from the beginning of the list
  shift() {
    //   if the list has no elements, return undefined
    if (!this.head) return undefined;
    // store the node to be removed
    let removed = this.head;
    // if there is only one element in the list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  //   add a node to the beginning of the list
  unshift(val) {
    // create a new node
    let newNode = new Node(val);
    // if the list is empty set the new node to be the head
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the next prop of the new node to be the head node
      newNode.next = this.head;
      // set the prev prop of the prev head node to be the new node
      this.head.prev = newNode;
      // set the new head node to be the new node
      this.head = newNode;
    }
    // increment the length of the list
    this.length++;
    return this;
  }
  //   find and return the node at the desired index
  get(index) {
    // if there are no items in the list or
    // the index is less than 0 or greater than the length-1, return undefined
    if (!this.head || index < 0 || index >= this.length) return undefined;
    // find the halfway point in the list
    let half = Math.floor(this.length / 2);
    let node = null;
    // if the index is less than or equal to the half way point
    // start the search from the beginning
    if (index <= half) {
      node = this.head;
      while (index > 0) {
        node = node.next;
        index--;
      }
    }
    // Otherwise, start the search from the end
    else {
      node = this.tail;
      index = this.length - 1 - index;
      while (index > 0) {
        node = node.prev;
        index--;
      }
    }
    // return node at index
    return node;
  }
  //   change the node value at the desired index
  set(index, val) {
    // if there are no items in the list or
    // the index is less than 0 or greater than the length-1, return undefined
    if (!this.head || index < 0 || index >= this.length) return false;
    let node = this.get(index);
    node.val = val;
    return true;
  }
  //   insert a node at a desired index
  insert() {}
  //   remove a node from a desired index
  remove() {}
  //   prints all values in the list in array form
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var a = new doublyLinkedList();
a.unshift("booger");
a.unshift("tree");

a.push(1);
a.push(2);
a.push("poo");
a.print();

// console.log(a.pop());
// console.log(a.shift());
a.unshift(1000000);
console.log(a.get(0));
a.set(5, "bloop");

console.log(a);
