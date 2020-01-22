// implement a Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    // this.values = [1000, 50, 100, 30, 22, 70, 80, 11];
    this.values = [];
  }
  insert(val) {
    //   push in the new value
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    const elem = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      console.log(parent);
      if (elem <= parent) break;
      this.values[parentIdx] = elem;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }
  extractMax() {
    //   get the length of the value array
    const n = this.values.length;
    //   swap the max value with the last value (could be smallest, but not guaranteed)
    const output = this.values[0];
    // remove the value from the end of the heap and store it
    const end = this.values.pop();

    if (n > 0) {
      // move the last value to the front
      this.values[0] = end;
      //   let the value sink down into the correct position
      this.sinkDown();
    }

    return output;
  }
  sinkDown() {
    const n = this.values.length;
    let parentIdx = 0,
      childIdx = 0,
      chIdx1 = 0,
      chIdx2 = 0,
      child1,
      child2;
    let parent = this.values[parentIdx];
    // stop the while loop when the child index is beyond the length of the heap
    while (childIdx < n) {
      // declare child indices
      chIdx1 = 2 * parentIdx + 1;
      chIdx2 = 2 * parentIdx + 2;
      if (chIdx1 < n) child1 = this.values[chIdx1];
      else child1 = null;
      if (chIdx2 < n) child2 = this.values[chIdx2];
      else child2 = null;

      // compare the parent to each of its children to decide which path to go down
      // otherwise break if the parent is still larger than both its children
      if (child1 && child2 && parent < child1 && parent < child2) {
        if (child1 < child2) childIdx = chIdx2;
        else childIdx = chIdx1;
      } else if (child1 && parent < child1) childIdx = chIdx1;
      else if (child2 && parent < child2) childIdx = chIdx2;
      else break;
      //   swap the values of the child and the parent
      this.swap(childIdx, parentIdx);
      // update the child and parent indexes
      parentIdx = childIdx;
    }
  }
  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
}

var a = new MaxBinaryHeap();
a.insert(41);
a.insert(39);
a.insert(33);
a.insert(18);
a.insert(27);
a.insert(12);
a.insert(55);

console.log(a.values);
console.log(a.extractMax());
console.log(a.values);
console.log(a.extractMax());
console.log(a.values);
