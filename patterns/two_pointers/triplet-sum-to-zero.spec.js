const solution = require('./triplet-sum-to-zero')

describe('Triplet Sum to Zero (medium)', () => {
  describe('searchTriplets', () => {
    it('search triplets that add to zero', () => {
      const result = solution.searchTriplets([
        -3, 0, 1, 2, -1, 1, -2
      ])

      expect(result).toEqual([
        [-3, 1, 2],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, 0, 1]
      ])
    })

    it('search triplets that add to zero', () => {
      const result = solution.searchTriplets([
        -5, 2, -1, -2, 3
      ])

      expect(result).toEqual([
        [-5, 2, 3],
        [-2, -1, 3]
      ])
    })
  })
})
