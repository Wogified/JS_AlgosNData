// implement a Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    //   push in the new value
    this.values.push(val);
    // check the length of the values array
    let childIdx = this.values.length - 1;
    // if the array length is greater than 1
    if (childIdx > 0) {
      // calculate the value of the parent index
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      let child = this.values[childIdx];
      // while the child node is still larger than the parent node
      // bubble up the value
      while (parent < child) {
        //   swap the values of the child and the parent
        this.swap(childIdx, parentIdx);
        // update the child and parent indexes
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
        // update the values of the child and parent
        parent = this.values[parentIdx];
        child = this.values[childIdx];
      }
    }
  }
  extractMax() {
    //   get the length of the value array
    let n = this.values.length;
    //   swap the max value with the last value (could be smallest, but not guaranteed)
    this.swap(0, n - 1);
    // remove the max value, which should be at the end now
    let output = this.values.pop();
    if (n > 2) {
      // declare variables for the parent and child nodes
      let parentIdx = 0;
      let childIdx = 0;
      let parent = this.values[parentIdx];
      // stop the while loop when the child index is beyond the length of the heap
      while (childIdx < n) {
        // declare child indices
        let chIdx1 = 2 * parentIdx + 1;
        let chIdx2 = 2 * parentIdx + 2;
        // compare the parent to each of its children to decide which path to go down
        // otherwise break if the parent is still larger than both its children
        if (parent < this.values[chIdx1]) childIdx = chIdx1;
        else if (parent < this.values[chIdx2]) childIdx = chIdx2;
        else break;
        //   swap the values of the child and the parent
        this.swap(childIdx, parentIdx);
        // update the child and parent indexes
        parentIdx = childIdx;
      }
    }

    return output;
  }
  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
}

var a = new MaxBinaryHeap();
a.insert(100);
a.insert(10);
a.insert(50);
a.insert(35);
a.insert(11);
a.insert(123);
a.insert(77);
a.insert(1000);

console.log(a.values);
a.extractMax();
console.log(a.values);
console.log(a.extractMax());
console.log(a.values);
