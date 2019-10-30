const solution = require('./squaring-sorted-array')

describe('Squaring a Sorted Array (easy)', () => {
  describe('makeSquares1', () => {
    it('squares a sorted array', () => {
      const result = solution.makeSquares1([
        -2, -1, 0, 2, 3
      ])

      expect(result).toEqual([0, 1, 4, 4, 9])
    })

    it('squares a sorted array', () => {
      const result = solution.makeSquares1([
        -3, -1, 0, 1, 2
      ])

      expect(result).toEqual([0, 1, 1, 4, 9])
    })
  })

  describe('makeSquares2', () => {
    it('squares a sorted array', () => {
      const result = solution.makeSquares2([
        -2, -1, 0, 2, 3
      ])

      expect(result).toEqual([0, 1, 4, 4, 9])
    })

    it('squares a sorted array', () => {
      const result = solution.makeSquares2([
        -3, -1, 0, 1, 2
      ])

      expect(result).toEqual([0, 1, 1, 4, 9])
    })
  })
})
