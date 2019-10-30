const solution = require('./standard-binary-search')

describe('Standard Binary Search (easy)', () => {
  describe('binarySearch', () => {
    it('Search an item', () => {
      const result = solution.binarySearch(
        [-3, -2, -1, 2, 4, 8, 9],
        8
      )

      expect(result).toEqual(5)
    })
  })
})
