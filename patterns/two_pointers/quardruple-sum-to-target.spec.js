const solution = require('./quardruple-sum-to-target')

describe('Quadruple Sum to Target (Medium)', () => {
  describe('searchQuarduplets', () => {
    it('find all unique quarduplets whoce sum equal to target', () => {
      const result = solution.searchQuadruplets(
        [4, 1, 2, -1, 1, -3],
        1
      )

      expect(result).toEqual([
        [-3, -1, 1, 4],
        [-3, 1, 1, 2]
      ])
    })

    it('find all unique quarduplets whoce sum equal to target', () => {
      const result = solution.searchQuadruplets(
        [2, 0, -1, 1, -2, 2],
        2
      )

      expect(result).toEqual([
        [-2, 0, 2, 2],
        [-1, 0, 1, 2]
      ])
    })
  })
})
