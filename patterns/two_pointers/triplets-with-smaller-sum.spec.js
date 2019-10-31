const solution = require('./triplets-with-smaller-sum')

describe('Triplets with Smaller Sum (medium)', () => {
  describe('tripletsWithSmallerSum1', () => {
    it('count triplets which sum is smaller than target sum', () => {
      const result = solution.tripletsWithSmallerSum1(
        [-1, 0, 2, 3],
        3
      )

      expect(result).toEqual(2)
    })

    it('count triplets which sum is smaller than targe sum', () => {
      const result = solution.tripletsWithSmallerSum1(
        [-1, 4, 2, 1, 3],
        5
      )

      expect(result).toEqual(4)
    })
  })

  describe('tripletsWithSmallerSum2', () => {
    it('find all triplets which sum is smaller than target sum', () => {
      const result = solution.tripletsWithSmallerSum2(
        [-1, 0, 2, 3],
        3
      )

      expect(result).toEqual([
        [-1, 0, 3],
        [-1, 0, 2]
      ])
    })

    it('find all triplets which sum is smaller than targe sum', () => {
      const result = solution.tripletsWithSmallerSum2(
        [-1, 4, 2, 1, 3],
        5
      )

      expect(result).toEqual([
        [-1, 1, 4],
        [-1, 1, 3],
        [-1, 1, 2],
        [-1, 2, 3]
      ])
    })
  })
})
