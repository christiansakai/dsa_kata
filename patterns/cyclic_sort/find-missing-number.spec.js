const solution = require('./find-missing-number')

describe('Find the Missing Number (Easy)', () => {
  describe('findMissingNumber', () => {
    it('find the missing number', () => {
      const result = solution.findMissingNumber([4, 0, 3, 1])

      expect(result).toEqual(2)
    })

    it('find the missing number', () => {
      const result = solution.findMissingNumber(
        [8, 3, 5, 2, 4, 6, 0, 1]
      )

      expect(result).toEqual(7)
    })
  })
})
