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

  recursiveDFS(vertex) {
    // object to keep track of visited vertices
    let visited = {};
    // array to store the order in which vertices were visited
    let results = [];
    // recursive helper function
    const helper = v => {
      // base case. if no neighbooring vertices were visited, then return
      if (!v) return;
      // add the current vertex to the results output
      results.push(v);
      // mark the current vertex as visited
      visited[v] = true;
      let n = this.adjacencyList[v].length;
      for (let i = 0; i < n; i++) {
        // if the current connected vertex has not been visited, then recursively call the helper function again
        if (!visited[this.adjacencyList[v][i]])
          helper(this.adjacencyList[v][i]);
      }
    };
    helper(vertex);
    return results;
  }

  iterativeDFS(vertex) {
    // object to keep track of visited vertices
    let visited = {};
    // array to store the order in which vertices were visited
    let results = [];
    // stack for preserving the search order
    let stack = [vertex];
    while (stack.length > 0) {
      // pop a value from the stack
      let v = stack.pop();
      // if the current vertex has not been visited then do stuff
      if (!visited[v]) {
        // mark vertex as visited
        visited[v] = true;
        // add vertex to results output
        results.push(v);
        let n = this.adjacencyList[v].length;
        // loop through the connected vertices and add them to the stack
        for (let i = 0; i < n; i++) {
          stack.push(this.adjacencyList[v][i]);
        }
      }
    }
    return results;
  }
  breadthFirstSearch(vertex) {
    // create a queue for store vertices to visit next
    let queue = [vertex];
    // object to mark vertices as visited
    let visited = {};
    // results output
    let results = [];
    let v;
    let count = 0;
    while (queue.length > 0) {
      v = queue.shift();
      if (!visited[v]) {
        // mark vertex as visited
        visited[v] = true;
        // add vertex to results output
        results.push(v);
        let n = this.adjacencyList[v].length;
        // loop through the connected vertices and add them to the stack
        for (let i = 0; i < n; i++) {
          if (!visited[this.adjacencyList[v][i]])
            queue.push(this.adjacencyList[v][i]);
        }
      }
      count++;
    }
    // console.log(count);
    return results;
  }
}

var a = new Graph();
a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");
a.addEdge("A", "B");
a.addEdge("A", "C");
a.addEdge("B", "D");
a.addEdge("C", "E");
a.addEdge("D", "E");
a.addEdge("D", "F");
a.addEdge("E", "F");
console.log(a.adjacencyList);

var res = a.recursiveDFS("A");
console.log(res);
console.log("-----------------------");
var res = a.iterativeDFS("A");
console.log(res);

console.log("-----------------------");
var res = a.breadthFirstSearch("A");
console.log(res);

// a.removeVertex("A");
// a.addVertex("Tokyo");
// a.addVertex("New York");
// a.addVertex("Los Angeles");
// a.addVertex("Dallas");

// console.log(a.adjacencyList);

// a.addEdge("Tokyo", "Dallas");
// a.addEdge("New York", "Dallas");
// a.addEdge("Los Angeles", "Dallas");
// console.log(a.adjacencyList);

// a.removeEdge("Tokyo", "Dallas");
// console.log(a.adjacencyList);

// a.removeEdge("New York", "Dallas");
// console.log(a.adjacencyList);
// a.removeVertex("Dallas");
// console.log(a.adjacencyList);
