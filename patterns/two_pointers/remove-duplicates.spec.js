const solution = require('./remove-duplicates')

describe('Remove Duplicates (Easy)', () => {
  describe('removeDuplicates', () => {
    it('removes duplicates and return  the new length of the array', () => {
      const result = solution.removeDuplicates(
        [2, 3, 3, 3, 6, 9, 9]
      )

      expect(result).toEqual(4)
    })

    it('removes duplicates and return  the new length of the array', () => {
      const result = solution.removeDuplicates(
        [2, 2, 2, 2, 11]
      )

      expect(result).toEqual(2)
    })
  })
})
