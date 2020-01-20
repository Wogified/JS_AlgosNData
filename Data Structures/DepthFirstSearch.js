// Depth first search Pre order: 

function preOrderDFS(tree){
    // variable to store values of nodes visited
    let output = []
    let current = tree.root

    function traverse(node){
        output.push(node.value)
        if(node.left) traverse(node.left)
        else return node
        if(node.right) traverse(node.right)
        else return node
    }
    traverse(current)
    return output
}

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
  var a = new BinarySearchTree();
  var BSTvals = [10,5,15,2,6,12,17]
//          10
//      5       15
//    2   6   12   17
for(let i =0;i<BSTvals.length;i++){
    a.insert(BSTvals[i]);
}

console.log(preOrderDFS((a)));
