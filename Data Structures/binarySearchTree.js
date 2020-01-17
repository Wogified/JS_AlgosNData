class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //   insert method
  insert(val) {
    let newNode = new Node(val);
    // if there are no nodes in the tree
    if (this.root === null) {
      this.root = newNode;
    } else {
      let next = this.root;
      let current;
      while (next !== null) {
        // update the value of the current node
        current = next;
        // if current value is equal to new node, return undefined
        if (newNode.value === current.value) return undefined;
        //   if the new node is greater than the current node, go right. otherwise go left
        if (newNode.value > current.value) {
          next = next.right;
          if (!next) current.right = newNode;
        } else {
          next = next.left;
          if (!next) current.left = newNode;
        }
      }
    }
    return this;
  }
  // find method
  find(value) {
    // is there a root value? if not, then return undefined
    if (!this.root) return false;
    else {
      let next = this.root;
      let current;
      while (next !== null) {
        // update the value of the current node
        current = next;
        // if current value is equal to new node, return undefined
        if (value === current.value) return true;
        //   if the new node is greater than the current node, go right. otherwise go left
        if (value > current.value) next = next.right;
        else next = next.left;
      }
      return false;
    }
  }
}

var a = new BinarySearchTree();
a.insert(10);
a.insert(5);
a.insert(13);
a.insert(2);
a.insert(11);
a.insert(7);
a.insert(16);
console.log(a.find(2));
console.log(a.find(3));
console.log(a.find(10));
console.log(a.find(6));
console.log(a.find(13));
console.log(a.find(30));
console.log(a);
