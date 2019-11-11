const solution = require('./find-all-missing-numbers')

describe('Find All the Missing Numbers (Easy)', () => {
  describe('findMissingNumbers', () => {
    it.only('what it should do', () => {
      const result = solution.findMissingNumbers(
        [2, 3, 1, 8, 2, 3, 5, 1]
      )

      expect(result).toEqual([4, 6, 7])
    })

    it.only('what it should do', () => {
      const result = solution.findMissingNumbers(
        [2, 4, 1, 2]
      )

      expect(result).toEqual([3])
    })

    it('what it should do', () => {
      const result = solution.findMissingNumbers(
        [2, 3, 2, 1]
      )

      expect(result).toEqual([4])
    })
  })
})
