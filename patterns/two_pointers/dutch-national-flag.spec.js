const solution = require('./dutch-national-flag')

describe('Dutch National Flag Problem (Medium)', () => {
  describe('dutchFlagSort', () => {
    it('sort the 3 object array ', () => {
      const result = solution.dutchFlagSort([1, 0, 2, 1, 0])

      expect(result).toEqual([0, 0, 1, 1, 2])
    })

    it('sort the 3 object array ', () => {
      const result = solution.dutchFlagSort([2, 2, 0, 1, 2, 0])

      expect(result).toEqual([0, 0, 1, 2, 2, 2])
    })
  })
})
