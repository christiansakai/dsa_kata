const solution = require('./triplet-sum-close-to-target')

describe('Triplet Sum Close to Target (medium)', () => {
  describe('tripletSumCloseToTarget', () => {
    it('search a triplet that is as close to target as possible', () => {
      const result = solution.tripletSumCloseToTarget(
        [-2, 0, 1, 2],
        2
      )

      expect(result).toEqual(1)
    })

    it('search a triplet that is as close to target as possible', () => {
      const result = solution.tripletSumCloseToTarget(
        [-3, -1, 1, 2],
        1
      )

      expect(result).toEqual(0)
    })

    it('search a triplet that is as close to target as possible', () => {
      const result = solution.tripletSumCloseToTarget(
        [1, 0, 1, 1],
        100
      )

      expect(result).toEqual(3)
    })
  })
})
