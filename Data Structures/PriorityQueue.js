// implement a minimum priority queue

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class MinPriorityQueue {
  constructor() {
    this.values = [];
  }
  Enqueue(val, priority) {
    // create a new node
    let newNode = new Node(val, priority);
    //   push in the new value
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    const elem = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      console.log(parent);
      if (elem.priority >= parent.priority) break;
      this.values[parentIdx] = elem;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
    }
  }
  Dequeue() {
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
      leftIdx = 0,
      rightIdx = 0,
      leftChild,
      rightChild,
      parent = this.values[parentIdx];
    // stop the while loop when the child index is beyond the length of the heap
    while (true) {
      // swap variable to store potential swap index
      let swap = null;
      // declare child indices
      leftIdx = 2 * parentIdx + 1;
      rightIdx = 2 * parentIdx + 2;
      //   if left child index is valid
      if (leftIdx < n) {
        //   define the left child value
        leftChild = this.values[leftIdx];
        // if the left child has lower priority than the parent
        // then set the swap index to be the left child index
        if (parent.priority > leftChild.priority) {
          swap = leftIdx;
        }
      }
      //   check if the right child index is valid
      if (rightIdx < n) {
        //   define the right child value
        rightChild = this.values[rightIdx];
        // if the swap index is still undefined and the right child has lower priority than the parent
        // or
        // if the swap index is already set to the left index and the right child has lower priority
        // than the left child
        // then
        // set the swap index to the right child index
        if (
          (swap === null && parent.priority > rightChild.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightIdx;
        }
      }
      //   if the swap index is still null at this point, then no swaps will be made
      if (swap === null) break;

      //   swap the values of the child and the parent
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parent;
      // update the child and parent indexes
      parentIdx = swap;
    }
  }
}

var a = new MinPriorityQueue();
a.Enqueue("hey", 10);
// console.log(a.values);
a.Enqueue("there", 5);
console.log(a.values);
a.Enqueue("you", 1);
console.log(a.values);
a.Enqueue("poo", 4);
console.log(a.values);
a.Dequeue();
console.log(a.values);
