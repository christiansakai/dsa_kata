const solution = require('./minimum-window-sort')

describe('Minimum Window Sort', () => {
  describe('shortestWindowSort', () => {
    it('return the smallest window length that needs to be sorted', () => {
      const result = solution.shortestWindowSort(
        [1, 2, 5, 3, 7, 10, 9, 12]
      )

      expect(result).toEqual(5)
    })

    it('return the smallest window length that needs to be sorted', () => {
      const result = solution.shortestWindowSort(
        [1, 3, 2, 0, -1, 7, 10]
      )

      expect(result).toEqual(5)
    })

    it('return the smallest window length that needs to be sorted', () => {
      const result = solution.shortestWindowSort(
        [1, 2, 3]
      )

      expect(result).toEqual(0)
    })

    it('return the smallest window length that needs to be sorted', () => {
      const result = solution.shortestWindowSort(
        [3, 2, 1]
      )

      expect(result).toEqual(3)
    })
  })
})
