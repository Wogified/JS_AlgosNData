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
    if (!this.head || index < 0 || index >= this.length) return null;
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
  insert(index, val) {
    // if the index is out of range of the list, return false
    if (index < 0 || index > this.length) return false;
    // if the node is at index of 0
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    // if the index is at the end of the list
    if (index === this.length) {
      this.push(val);
      return true;
    }
    // find the current node at the index
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    // create a new node with supplied value
    let newNode = new Node(val);
    // set the new node's prev prop to be the prev node
    newNode.prev = prevNode;
    // set the new node's next prop to be the prev node's next node
    newNode.next = prevNode.next;
    // set the prev node's prev prop to be the new node
    prevNode.next = newNode;
    // set the next node's prev prop to be the new node
    nextNode.prev = newNode;
    // increment the length
    this.length++;
    return true;
  }
  //   remove a node from a desired index
  remove(index) {
    // if the index is out of range of the list, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if the node is at index of 0
    if (index === 0) return this.shift();
    // if the index is at the end of the list
    if (index === this.length - 1) return this.pop();
    // get the node at the desired index
    let node = this.get(index);
    // temp variables to store the prev and next nodes
    let prev = node.prev;
    let next = node.next;
    // connect the prev.next to the next node
    // and the next.prev to the prev node
    prev.next = next;
    next.prev = prev;
    // clear the connections of the removed node
    node.prev = null;
    node.next = null;
    // decrement the length
    this.length--;
    // return the removed value
    return node;
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
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = null;

    while (current !== null) {
      prev = current.prev;
      next = current.next;
      current.next = prev;
      current.prev = next;
      current = next;
    }
    return this;
  }
}

// var a = new doublyLinkedList();
// a.unshift("booger");
// a.unshift("tree");
// a.push(1);
// a.push(2);
// a.push("poo");
// console.log(a.pop());
// console.log(a.shift());
// a.unshift(1000000);
// console.log(a.get(0));
// a.set(5, "bloop");
// console.log(a.insert(a.length, "meep"));
// console.log(a.insert(0, 89734));
// console.log(a.insert(3, "blarg"));
// a.remove(a.length - 1);
// a.remove(0);
// a.remove(2);
// a.print();
// a.reverse();
// a.print();
