const solution = require('./unique-pairs-with-target-sum')

describe('Unique Pairs with Target Sum (easy)', () => {
  describe('uniquePairsWithTargetSum', () => {
    it('find unique pairs for a target sum', () => {
      const result = solution.uniquePairsWithTargetSum(
        [0, 1, 1, 2, 3, 4, 5, 5, 6],
        6
      )

      expect(result).toEqual([
        [0, 6], [1, 5], [2, 4]
      ])
    })

    it('find unique pairs for a target sum', () => {
      const result = solution.uniquePairsWithTargetSum(
        [-3, -2, -1, -1, 4, 5, 5, 6, 7, 8, 9, 9],
        6
      )

      expect(result).toEqual([
        [-3, 9], [-2, 8], [-1, 7]
      ])
    })
  })
})
