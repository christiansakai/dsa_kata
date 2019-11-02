const solution = require('./cyclic-sort')

describe('Cyclic Sort (Easy) ', () => {
  describe('cyclicSort', () => {
    it('sort an array', () => {
      const result = solution.cyclicSort([3, 1, 5, 4, 2])

      expect(result).toEqual([1, 2, 3, 4, 5])
    })

    it('sort an array', () => {
      const result = solution.cyclicSort([2, 6, 4, 3, 1, 5])

      expect(result).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('sort an array', () => {
      const result = solution.cyclicSort([1, 5, 6, 4, 3, 2])

      expect(result).toEqual([1, 2, 3, 4, 5, 6])
    })
  })
})
