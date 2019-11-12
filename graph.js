class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = new Set();
  }

  addEdge(v1, v2) {
    if (v1 in this.vertices && v2 in this.vertices) {
      this.vertices[v1].add(v2);
    } else {
      return Error('That vertex does not exist.');
    }
  }

  bft(startingVertex) {
    let q = [];
    q.push(startingVertex);
    let visitedVertices = new Set();

    while (q.length > 0) {
      let firstVertex = q.shift();

      if (!visitedVertices.has(firstVertex)) {
        console.log(firstVertex);
        visitedVertices.add(firstVertex);

        this.vertices[firstVertex].forEach(vertex => q.push(vertex));
      }
    }
  }

  dft(startingVertex) {
    let s = [];
    s.push(startingVertex);
    let visitedVertices = new Set();

    while (s.length > 0) {
      let firstVertex = s.pop();

      if (!visitedVertices.has(firstVertex)) {
        console.log(firstVertex);
        visitedVertices.add(firstVertex);

        this.vertices[firstVertex].forEach(vertex => s.push(vertex));
      }
    }
  }

  dftRecursive(startingVertex, visitedVertices = new Set()) {
    if (!visitedVertices.has(startingVertex)) {
      console.log(startingVertex);
      visitedVertices.add(startingVertex);
      this.vertices[startingVertex].forEach(vertex =>
        this.dftRecursive(vertex, visitedVertices)
      );
    }
  }

  bfs(startingVertex, destinationVertex) {
    let q = [];
    q.push([startingVertex]);
    let visitedVertices = new Set();
    while (q.length > 0) {
      let path = q.shift();
      let vertex = path[path.length - 1];
      if (vertex === destinationVertex) {
        return path;
      }
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        this.vertices[vertex].forEach(vertex => {
          q.push([...path, vertex]);
        });
      }
    }
    return null;
  }

  dfs(startingVertex, destinationVertex) {
    let s = [];
    s.push([startingVertex]);
    let visitedVertices = new Set();
    while (s.length > 0) {
      let path = s.pop();
      let vertex = path[path.length - 1];
      if (vertex === destinationVertex) {
        return path;
      }
      if (!visitedVertices.has(vertex)) {
        visitedVertices.add(vertex);
        this.vertices[vertex].forEach(vertex => {
          s.push([...path, vertex]);
        });
      }
    }
    return null;
  }
}

const exampleGraph = new Graph();

exampleGraph.addVertex(1);
exampleGraph.addVertex(2);
exampleGraph.addVertex(3);
exampleGraph.addVertex(4);
exampleGraph.addVertex(5);
exampleGraph.addVertex(6);
exampleGraph.addVertex(7);

exampleGraph.addEdge(5, 3);
exampleGraph.addEdge(6, 3);
exampleGraph.addEdge(7, 1);
exampleGraph.addEdge(4, 7);
exampleGraph.addEdge(1, 2);
exampleGraph.addEdge(7, 6);
exampleGraph.addEdge(2, 4);
exampleGraph.addEdge(3, 5);
exampleGraph.addEdge(2, 3);
exampleGraph.addEdge(4, 6);

console.log(exampleGraph.vertices);

console.log('BFT');
exampleGraph.bft(1); // 1, 2, 4, 3, 7, 6, 5 (/n)

console.log('DFT');
exampleGraph.dft(1); // 1, 2, 3, 5, 4, 6, 7 (/n)

console.log('DFT RECURSIVE');
exampleGraph.dftRecursive(1); // 1, 2, 4, 7, 6, 3, 5 (/n)

console.log('BFS');
console.log(exampleGraph.bfs(1, 6)); // [ 1, 2, 4, 6 ]

console.log('DFS');
console.log(exampleGraph.dfs(1, 6)); // [ 1, 2, 4, 6 ]
