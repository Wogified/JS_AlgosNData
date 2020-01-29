// implement dijstra's algorithm
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
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  removeEdge(vertex1, vertex2) {
    this.removeEdgeHelper(vertex1, vertex2);
    this.removeEdgeHelper(vertex2, vertex1);
  }
  removeEdgeHelper = (v1, v2) => {
    //   get the length of the adjacency list
    let n = this.adjacencyList[v1].length;
    // set default value of the found index
    let foundIdx = 0;
    // if the list has more than 1 value in it, then loop through to find a match
    if (n > 1) {
      for (let i = 0; i < n; i++) {
        //  if a match is found, the set the found index and break from the loop
        if (this.adjacencyList[v1][i] === v2) {
          foundIdx = i;
          break;
        }
      }
    }
    // swap the value at the found index with the last value, then pop the value off
    let temp = this.adjacencyList[v1][foundIdx];
    this.adjacencyList[v1][foundIdx] = this.adjacencyList[v1][n - 1];
    this.adjacencyList[v1][n - 1] = temp;
    this.adjacencyList[v1].pop();
  };
  removeVertex(vertex) {
    let n = this.adjacencyList[vertex].length;
    for (let i = 0; i < n; i++) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]["node"]);
    }
    delete this.adjacencyList[vertex];
  }
  Dijkstra(start, end) {
    // object to store current cumulative distances from the current vertex to the start vertex
    let distances = {};
    //  Priority queue for looking at the vertex with the shortest path
    let pq = new MinPriorityQueue();
    // an object to store the prevous vertices visited in order to reach the current vertex
    let previous = {};
    // object to keep track of which vertices have been visited
    let visited = {};
    let smallest;
    // initialize the distances and previous objects
    for (let item in this.adjacencyList) {
      // the starting vertex has a priority of 0
      // while the other vertices have a priority of infinity because their distance is unknown
      if (item === start) distances[item] = 0;
      else distances[item] = Infinity;
      // add all vertices into the priority queue
      pq.Enqueue(item, distances[item]);
      // set the previous object to be null
      previous[item] = null;
    }
    // continue looping while the queue still has values
    while (pq.values.length > 0) {
      // console.log(pq.values);
      // dequeue a value
      smallest = pq.Dequeue().value;
      // break out of the loop if the end vertex is reached
      if (smallest === end) break;
      // Loop over the adjacency list of the smallest vertex
      for (let i = 0; i < this.adjacencyList[smallest].length; i++) {
        // check if the smallest vertex has a previous vertex
        let nextVert = this.adjacencyList[smallest][i];
        let dist = this.adjacencyList[smallest][i].weight + distances[smallest];
        // check if the vertex has not been visited before
        if (visited[nextVert] === undefined) {
          // if the calculated distance is less than the stored distance value
          if (dist < distances[nextVert.node]) {
            distances[nextVert.node] = dist;
            previous[nextVert.node] = smallest;
            pq.Enqueue(nextVert.node, distances[nextVert.node]);
          }
        }
      }
      visited[smallest] = true;
    }
    let result = [];
    let temp = end;
    while (temp) {
      result.unshift(temp);
      temp = previous[temp];
    }
    console.log(result);
    return result;
  }
}

var a = new Graph();
a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");
a.addEdge("A", "B", 4);
a.addEdge("A", "C", 2);
a.addEdge("B", "E", 3);
a.addEdge("C", "D", 2);
a.addEdge("C", "F", 4);
a.addEdge("D", "F", 1);
a.addEdge("D", "E", 3);
a.addEdge("E", "F", 1);
console.log(a.adjacencyList);
a.Dijkstra("A", "E");
