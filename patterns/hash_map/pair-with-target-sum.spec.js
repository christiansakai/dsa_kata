const solution = require('./pair-with-target-sum')

describe('Pair with Target Sum (easy)', () => {
  describe('pairWithTargetSum', () => {
    it.only('find a pair for a target sum', () => {
      const result = solution.pairWithTargetSum([1, 2, 3, 4, 5, 6], 6)

      expect(result).toEqual([3, 1])
    })

    it('find a pair for a target sum', () => {
      const result = solution.pairWithTargetSum([2, 5, 9, 11], 11)

      expect(result).toEqual([0, 2])
    })
  })
})
