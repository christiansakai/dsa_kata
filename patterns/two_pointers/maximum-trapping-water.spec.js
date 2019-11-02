const solution = require('./maximum-trapping-water')

describe('Maximum Trapping Water (Medium)', () => {
  describe('findMaxWater', () => {
    it('find maximum water', () => {
      const result = solution.findMaxWater(
        [1, 3, 5, 4, 1]
      )

      expect(result).toEqual(6)
    })

    it('find maximum water', () => {
      const result = solution.findMaxWater(
        [3, 2, 5, 4, 2]
      )

      expect(result).toEqual(9)
    })

    it('find maximum water', () => {
      const result = solution.findMaxWater(
        [1, 4, 3, 2, 5, 8, 4]
      )

      expect(result).toEqual(20)
    })
  })
})
