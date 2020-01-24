// implement a undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }
}
