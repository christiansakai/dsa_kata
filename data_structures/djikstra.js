const Heap = require('collections/heap')

class Graph {
  constructor () {
    this.nodesEdges = {}
  }

  addNode (value) {
    if (typeof value !== 'string') {
      throw new Error('Value must be a string')
    }

    this.nodesEdges[value] = []
  }

  addEdge (fromNode, toNode, distance) {
    if (typeof fromNode !== 'string' || typeof toNode !== 'string') {
      throw new Error('fromNode and toNode must be a string')
    }

    if (typeof distance !== 'number') {
      throw new Error('distance must be a number')
    }

    if (this.nodesEdges[fromNode] === undefined ||
        this.nodesEdges[toNode] === undefined) {
      throw new Error('Node is not registered')
    }

    this.nodesEdges[fromNode].push({
      neighbor: toNode,
      distance
    })

    this.nodesEdges[toNode].push({
      neighbor: fromNode,
      distance
    })
  }

  djikstraAlgorithm (startNode) {
    if (typeof startNode !== 'string') {
      throw new Error('startNode must be a string')
    }

    if (!this.nodesEdges[startNode] === undefined) {
      throw new Error('Node is not registered')
    }

    const distances = {}
    const nodeToParentNodeMap = {}
    const minHeap = new Heap([], null, (a, b) => {
      return distances[b] - distances[a]
    })

    // Build for startNode
    distances[startNode] = 0
    for (const node in this.nodesEdges) {
      if (node !== startNode) {
        distances[node] = Number.POSITIVE_INFINITY
      }
      
      nodeToParentNodeMap[node] = null
    }

    minHeap.push(startNode)

    while (minHeap.length > 0) {
      const minDistanceNode = minHeap.pop()
      const minDistanceNodeEdges = this.nodesEdges[minDistanceNode]

      minDistanceNodeEdges.forEach((edge) => {
        const totalDistanceToNeighbor =
          distances[minDistanceNode] + edge.distance

        if (totalDistanceToNeighbor < distances[edge.neighbor]) {
          distances[edge.neighbor] = totalDistanceToNeighbor
          nodeToParentNodeMap[edge.neighbor] = minDistanceNode
          minHeap.push(edge.neighbor)
        }
      })
    }

    return {
      nodeToParentNodeMap,
      distances
    }
  }
}

function test () {
  const graph = new Graph()
  graph.addNode('A')
  graph.addNode('B')
  graph.addNode('C')
  graph.addNode('D')
  graph.addNode('E')
  graph.addNode('F')
  graph.addNode('G')

  graph.addEdge('A', 'B', 3)
  graph.addEdge('A', 'C', 100)
  graph.addEdge('A', 'D', 4)
  graph.addEdge('D', 'C', 3)
  graph.addEdge('D', 'E', 8)
  graph.addEdge('E', 'F', 10)
  graph.addEdge('B', 'G', 9)
  graph.addEdge('E', 'G', 50)

  const result = graph.djikstraAlgorithm('A')
  console.log(result) // { A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: 12 }
}

test()
