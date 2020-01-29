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
    // object to keep track of which vertices have been visited
    let visited = {};
    // initialize the distances and previous objects
    for (let item in this.adjacencyList) {
      // the starting vertex has a priority of 0
      // while the other vertices have a priority of infinity
      // because their distance is unknown
      if (item === start) distances[item] = 0;
      else distances[item] = Infinity;
      // add all vertices into the priority queue
      pq.enqueue(item, distances[item]);
      // set the previous object to be null
      previous[item] = null;
    }
    // continue looping while the queue still has values
    while (pq.values.length > 0) {
      // dequeue a value
      let current = pq.dequeue().val;
      // console.log(this.adjacencyList[current]);

      // NOT SURE ABOUT THIS ONE
      if (current === end) break;
      else {
        // Loop over the adjacency list of the current vertex
        for (let i = 0; i < this.adjacencyList[current].length; i++) {
          // check if the current vertex has a previous vertex
          let nextVert = this.adjacencyList[current][i];
          let dist = this.adjacencyList[current][i].weight;
          let temp = current;
          console.log(`Current: ${current}, Next: ${nextVert.node}`);
          if (visited[nextVert] === undefined) {
            // loop while the previous vert is not null
            // this won't happen on the first verts from the start
            while (temp !== start) {
              if (current === "D") {
                console.log(previous);
                // console.log(temp);
                console.log(dist);
              }
              for (let j = 0; j < this.adjacencyList[temp].length; j++) {
                if (this.adjacencyList[temp][j].node === previous[temp]) {
                  console.log(this.adjacencyList[temp][j].node, dist);
                  dist += this.adjacencyList[temp][j].weight;
                }
              }
              temp = previous[temp];
            }
            console.log(`Total Dist: ${dist}`);
            if (dist < distances[nextVert.node]) {
              distances[nextVert.node] = dist;
              previous[nextVert.node] = current;
              pq.enqueue(nextVert.node, distances[nextVert.node]);
            }
          }
        }
      }
      visited[current] = true;
    }
    // console.log(distances);
    let result = [];
    let temp = end;
    while (temp) {
      result.unshift(temp);
      temp = previous[temp];
    }
    console.log(result);
    console.log(distances);
    console.log(previous);
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
