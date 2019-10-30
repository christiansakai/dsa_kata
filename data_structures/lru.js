class Node {
  constructor (key, value) {
    if (typeof key === 'undefined' || typeof key === null) {
      throw new Error('Key and value must not be null or undefined')
    }

    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor (limit = 10) {
    if (typeof limit !== 'number') {
      throw new Error('Limit must be a number')
    }

    this.limit = limit
    this.size = 0
    this.cache = {}

    this.head = new Node('DUMMY', 'DUMMY')
    this.tail = new Node('DUMMY', 'DUMMY')

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  set (key, value) {
    if (typeof key === 'undefined' || typeof key === null) {
      throw new Error('Key and value must not be null or undefined')
    }

    const existingNode = this.cache[key]
    if (existingNode) {
      this.removeNodeFromDeque(existingNode)
      node.value = value
      this.addNodeToHead(existingNode)
    } else {
      if (this.size === this.limit) {
        this.removeTailNode()
        const newNode = new Node(key, value)
        this.cache[key] = newNode
        this.addNodeToHead(newNode)
      } else {
        const newNode = new Node(key, value)
        this.cache[key] = newNode
        this.addNodeToHead(newNode)
        this.size += 1
      }
    }
  }

  get (key) {
    if (typeof key === 'undefined' || typeof key === null) {
      throw new Error('Key must not be null or undefined')
    }

    const node = this.cache[key]
    if (node) {
      this.removeNodeFromDeque(node)
      this.addNodeToHead(node)
      return node.value
    }
  }

  unset (key) {
    if (typeof key === 'undefined' || typeof key === null) {
      throw new Error('Key must not be null or undefined')
    }

    const node = this.cache[key]
    if (node) {
      this.removeNodeFromDeque(node)
      this.size -= 1
      return node.value
    }
  }

  removeNodeFromDeque (node) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev

    node.prev = null
    node.next = null
  }

  addNodeToHead (node) {
    const formerHead = this.head.next
    node.next = formerHead
    formerHead.prev = node

    this.head.next = node
  }

  removeTailNode () {
    const tailNode = this.tail.prev
    const prev = tailNode.prev
    const next = tailNode.next

    prev.next = next
    next.prev = prev

    tailNode.prev = null
    tailNode.next = null
  }

  printDeQue () {
    const arr = []
    let node = this.head.next
    while (node.key !== 'DUMMY') {
      arr.push({
        key: node.key,
        value: node.value
      })
      node = node.next
    }

    console.log(arr)
  }
}

function test () {
  const cache = new LRUCache(5)

  cache.set(1, 1) // 1
  cache.printDeQue()
  cache.set(2, 2) // 2 <-> 1
  cache.printDeQue()
  cache.set(3, 3) // 3 <-> 2 <-> 1
  cache.printDeQue()
  cache.set(4, 4) // 4 <-> 3 <-> 2 <-> 1
  cache.printDeQue()
  cache.set(5, 5) // 5 <-> 4 <-> 3 <-> 2 <-> 1
  cache.printDeQue()

  cache.get(1) // 1 <-> 5 <-> 4 <-> 3 <-> 2
  cache.printDeQue()
  cache.get(2) // 2 <-> 1 <-> 5 <-> 4 <-> 3
  cache.printDeQue()

  cache.set(6, 6) // 6 <-> 2 <-> 1 <-> 5 <-> 4
  cache.printDeQue()
  cache.set(7, 7) // 7 <-> 6 <-> 2 <-> 1 <-> 5
  cache.printDeQue()
  cache.set(8, 8) // 8 <-> 7 <-> 6 <-> 2 <-> 1
  cache.printDeQue()
}

test()
