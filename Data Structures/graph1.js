// implement a undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
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
      //   console.log(arr, vertex, arr[0]);
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
  }
}

var a = new Graph();

a.addVertex("Tokyo");
a.addVertex("New York");
a.addVertex("Los Angeles");
a.addVertex("Dallas");

// console.log(a.adjacencyList);

a.addEdge("Tokyo", "Dallas");
a.addEdge("New York", "Dallas");
a.addEdge("Los Angeles", "Dallas");
console.log(a.adjacencyList);

// a.removeEdge("Tokyo", "Dallas");
// console.log(a.adjacencyList);

// a.removeEdge("New York", "Dallas");
// console.log(a.adjacencyList);
a.removeVertex("Dallas");
console.log(a.adjacencyList);
