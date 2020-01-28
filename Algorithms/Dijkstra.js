// implement dijstra's algorithm
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
    // object to store current cumulative distances from the current
    // vertex to the start vertex
    let distances = {};
    let pq = new PriorityQueue();
    // an object to store the prevous vertices visited in order to reach the current vertex
    let previous = {};
    let visited = { start };
    for (let item in this.adjacencyList) {
      if (item === start) distances[item] = 0;
      else {
        distances[item] = Infinity;
        pq.enqueue(item, distances[item]);
      }
      previous[item] = null;
    }
    while (pq.values.length > 0) {
      let current = pq.dequeue();
      if (current === end) break;
      else {
        for (let i = 0; i < this.adjacencyList[current].length; i++) {
          let dist = this.adjacencyList[current][i].weight;
          if (this.adjacencyList[current][i]) {
          }
        }
      }
    }
    // console.log(distances);
  }
}

var a = new Graph();
a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");
a.addEdge("A", "B", 9);
a.addEdge("A", "C", 5);
a.addEdge("B", "D", 2);
a.addEdge("C", "E", 12);
a.addEdge("D", "E", 3);
a.addEdge("D", "F", 4);
a.addEdge("E", "F", 20);
console.log(a.adjacencyList);
a.Dijkstra("A", "E");
