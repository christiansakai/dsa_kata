const solution = require('./subarrays-with-product-less-than-number')

describe('Subarrays with Product Less Than a Target (Medium)', () => {
  describe('findSubArrays', () => {
    it.only('find sub arrays with product less than a target', () => {
      const result = solution.findSubArrays(
        [2, 5, 3, 10],
        30
      )

      expect(result).toEqual([
        [2],
        [5],
        [2, 5],
        [3],
        [5, 3],
        [10]
      ])
    })
  })
})
