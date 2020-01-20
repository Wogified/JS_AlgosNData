class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let next = this.root;
      let current;
      while (next !== null) {
        current = next;
        if (newNode.value === current.value) return undefined;
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
}

function BFS(tree) {
  if (!tree.root) return undefined;
  let node = tree.root,
    result = [],
    queue = [node];

  while (queue.length) {
    console.log(queue);
    node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

let a = new BST();
a.insert(10);
a.insert(5);
a.insert(16);
a.insert(2);
a.insert(6);
a.insert(12);
a.insert(20);

console.log(BFS(a));
