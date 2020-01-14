// Implement the Singly Linked List Data structure

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default class singlyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // add a new value to the end of the list
  push(val) {
    // create a new node
    let newNode = new Node(val);
    // if there are no nodes in the linked list, set the new node to be the head node
    if (this.head === null) this.head = newNode;
    // otherwise set the next property on the tail to be the new node
    else this.tail.next = newNode;
    // in general set the tail property to be the new node
    this.tail = newNode;
    // increment the length property by 1
    this.length++;
    // return the list
    return this;
  }
  // remove a value from the end of the list
  pop() {
    // if there are no items in the list, return undefined
    if (!this.head) return undefined;
    // variable for current node
    let current = this.head;
    // variable for the previous node
    let prev = current;
    // loop traverse the list until the tail is reached
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    // set the tail to be the second to last value
    this.tail = prev;
    // set the next property of the second to last node to be null
    this.tail.next = null;
    // subtract 1 from the list length
    this.length--;
    // if there are no more elements in the list, then set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the removed Node
    return current;
  }
  //   remove a node from the beginning of the list
  shift() {
    // if there are no items in the list, return undefined
    if (!this.head) return undefined;
    // store the head node for returning
    let currentHead = this.head;
    // set the head to be the next node
    this.head = this.head.next;
    // decrement the list length by 1
    this.length--;
    // if the list is empty set the tail to be null
    if (this.length === 0) this.tail = null;
    // return the removed value
    return currentHead;
  }
  //   add a node to the beginning of the list
  unshift(val) {
    // create a new node
    let newNode = new Node(val);
    // if there are no nodes in the linked list, set the head and the tail
    // to be the new node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the next prop of the new node to be the previous head node
      newNode.next = this.head;
      // set the head node to be the new Node
      this.head = newNode;
    }
    // increment the list length by 1
    this.length++;
    // return the linked list
    return this;
  }
  // accesses the value at a user supplied index
  get(i) {
    // if there are no items in the list or if the index is
    // out of range of the list length, return undefined
    if (i < 0 || i >= this.length) return undefined;
    // variable for counting the position
    let count = 0;
    // variable for current node
    let current = this.head;
    while (count < i) {
      current = current.next;
      count++;
    }
    return current;
  }
  //   change the value at a user specified node
  set(index, val) {
    //   use the get method to find the desired node
    let node = this.get(index);
    // if the node exists, then set the value of that node to be the new value
    if (node) {
      node.val = val;
      return true;
    }
    // otherwise return false
    return false;
  }
  // insert a node at a specific position in the list
  insert(index, val) {
    // if there are no items in the list or if the index is
    // out of range of the list length, return undefined
    if (index < 0 || index > this.length) return false;
    // if the desired index is at 0, use the unshift method
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    // else if the desired index is at the end of the list,
    // use the push method to add to the end
    if (index === this.length) {
      this.push(val);
      return true;
    }
    // else  create a new node
    // store the node before the desired node index
    // set the new node's next prop to be the previous node's next node
    // set the previous node's next prop to be the new node
    // increment the list length
    var newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    // return the list
    return true;
  }
  // remove a node at the specified index
  remove(index) {
    // if there are no items in the list or if the index is
    // out of range of the list length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if the desired index is at 0, use the shift method
    if (index === 0) return this.shift();
    // else if the desired index is at the end of the list,
    // use the pop method to add to the end
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  //   reverse the list
  reverse() {
    //   swap the head and the tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    // loop traverse the list
    for (let i = 0; i < this.length; i++) {
      // set the next var to the next node
      next = node.next;
      // set the current node to point to the previous node
      node.next = prev;
      // set the previous node to be the current node
      prev = node;
      // update the node to be the next node
      node = next;
    }
    return this;
  }
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

// var test = new singlyLinkedList();
// test.push("hi");
// test.push("bye");
// test.push(123);
// test.pop();
// test.shift();
// test.unshift("blerg");
// test.insert(0, "lard");
// console.log(test);
// test.insert(4, "loop");
// console.log(test);
// test.insert(3, 9999);
// console.log(test);
// console.log(test.remove(3));
// console.log(test.remove(0));
// console.log(test.remove(4));
// console.log(test.remove(39));
// test.print();
// test.reverse();
// test.print();
