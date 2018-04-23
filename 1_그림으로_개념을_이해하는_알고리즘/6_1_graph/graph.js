class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex.name] = vertex;
  }

  // 4. `Step 4: 이웃까지의 거리를 계산했을 때, 이전보다 더 가까운 경우 거리 값을 갱신하고, Step 2로 진행한다.`
  // 6. `Step 6: Queue가 비어있을 때 목적지의 거리가 최단 거리이다.`
  findMinPath(start, end) {
    // 앞으로 찾을 정점들을 저장할 Queue
    const queue = [];

    // 1. `Step 1: 각 정점의 거리를 저장하는 배열을 만든다. 기본 값은 INF(무한대)이다.`
    const distance = this.createDistanceMap();
    console.log('distance:', distance);

    // 2. `Step 2: 주변의 이웃을 Queue에 집어넣는다.`
    // 3. `Step 3: Queue에서 시작점으로부터 거리가 가까운 순으로 정점을 꺼내서 정점의 이웃들의 거리를 계산한다.`
    let nextVertexName = this.findNearestVertex(distance);
    // let nextVertex = this.vertices[nextVertexName];
    // nextVertex.neighbors.forEach((key, value) => {
    //   queue.push();
    // });
  }

  createDistanceMap() {
    const distance = new Map();
    Object.keys(this.vertices).map(key => {
      distance[key] = Number.MAX_SAFE_INTEGER; // INF
    });
    return distance;
  }

  // O(n)의 선형 탐색
  findNearestVertex(fromMap)  {
    let nearestVertex = fromMap.keys().next().value;
    fromMap.forEach((key, value) => {
      if (fromMap[nearestVertex] > fromMap[key]) {
        nearestVertex = key;
      }
    })
  }
  return nearestVertex;
}

class Vertex {
  constructor(name) {
    this.name = name;
    this.visited = false;
    this.neighbors = new Map();
  }

  addEdge(vertex, weigh) {
    this.neighbors.set(vertex, weigh);
  }
}

const graph = new Graph();

const A = new Vertex('A');
A.addEdge('B', 4);

const B = new Vertex('B');
B.addEdge('C', 6);
B.addEdge('D', 12);

graph.addVertex(A);
graph.addVertex(B);

graph.findMinPath('A', 'B');
