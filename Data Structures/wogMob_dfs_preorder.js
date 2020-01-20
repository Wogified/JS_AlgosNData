// implement Depth first searching preorder

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

function preOrderDFS(tree) {
    let output = []
    let current = tree.root
    function traverse(node) {
        // push in the value of the current node
        output.push(node.value)

        // if the current node has left child, call traverse again
        if (node.left) traverse(node.left)
        else return node
        // if the current node has a right child, call traverse again
        if (node.right) traverse(node.right)
        else return node
    }
    traverse(current)
    return output
}


var a = new BinarySearchTree();

var BST_array = [10, 5, 2, 6, 15, 12, 17]
for (let i = 0; i < BST_array.length; i++) {
    a.insert(BST_array[i])
}

//              10
//          5       15
//        2   6   12    17

// Correct result
// [10,5,2,6,15,12,17]

var result = preOrderDFS(a)
console.log(result)
