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

  primAlgorithm () {
    const mst = new Graph()
    const allNodes = Object.keys(this.nodesEdges)
    if (allNodes.length === 0) {
      return mst
    }

    let node = allNodes[0]
    const edgeQueue = new Heap([], null, (a, b) => {
      return b.distance - a.distance
    })

    const visited = new Set()
    visited.add(node)
    mst.addNode(node)

    this.nodesEdges[node].forEach((edge) => {
      edgeQueue.push({
        node: edge.neighbor,
        distance: edge.distance
      })
    })

    while (edgeQueue.length > 0) {
      let currentMinEdge = edgeQueue.pop()

      while (edgeQueue.lenth > 0 && visited.has(currentMinEdge.node)) {
        currentMinEdge = edgeQueue.pop()
      }

      if (!visited.has(currentMinEdge.node)) {
        visited.add(currentMinEdge.node)
        mst.addNode(currentMinEdge.node)
        mst.addEdge(node, currentMinEdge.node, currentMinEdge.distance)

        this.nodesEdges[currentMinEdge.node].forEach((edge) => {
          edgeQueue.push({
            node: edge.neighbor,
            distance: edge.distance
          })
        })
      }
    }

    return mst
  }

  print () {
    for (const node in this.nodesEdges) {
      const edges = this.nodesEdges[node].map((e) => e.neighbor)
      console.log(node, ' -> ', edges)
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

  const result = graph.primAlgorithm()
  result.print()

  // A->B, D
  // B->A, G
  // D->A, C, E
  // C->D
  // E->D, F
  // G->B
  // F->E
}

test()
