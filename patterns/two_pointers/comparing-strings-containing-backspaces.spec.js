const solution = require('./comparing-strings-containing-backspaces')

describe('Comparing Srings Containing Backspaces (Medium)', () => {
  describe('backspacesCompare', () => {
    it('compare two strings containing backspaces', () => {
      const result = solution.backspacesCompare(
        'xy#z',
        'xzz#'
      )

      expect(result).toEqual(true)
    })

    it('compare two strings containing backspaces', () => {
      const result = solution.backspacesCompare(
        'xy#z',
        'xyz#'
      )

      expect(result).toEqual(false)
    })

    it('compare two strings containing backspaces', () => {
      const result = solution.backspacesCompare(
        'xp#',
        'xyz##'
      )

      expect(result).toEqual(true)
    })

    it('compare two strings containing backspaces', () => {
      const result = solution.backspacesCompare(
        'xywrrmp',
        'xywrrmu#p'
      )

      expect(result).toEqual(true)
    })
  })
})
