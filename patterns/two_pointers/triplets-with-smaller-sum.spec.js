const solution = require('./triplets-with-smaller-sum')

describe('Triplets with Smaller Sum (medium)', () => {
  describe('tripletsWithSmallerSum', () => {
    it('search a triplet that is as close to target as possible', () => {
      const result = solution.tripletsWithSmallerSum(
        [-1, 0, 2, 3],
        3
      )

      expect(result).toEqual(2)
    })

    it('search a triplet that is as close to target as possible', () => {
      const result = solution.tripletsWithSmallerSum(
        [-1, 4, 2, 1, 3],
        5
      )

      expect(result).toEqual(4)
    })
  })
})
