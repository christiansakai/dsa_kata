/**
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is qual to the given target.
 */

/**
 * Iterate through the array.
 * For every item, see if we can find its complement using binary search.
 * If we can, we have found the pair.
 *
 * Time Complexity: O(N log N)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr - The array of numbers
 * @param {number} targetSum - The target sum
 * @returns {number[]|null} - The pair of numbers, return null if not found
 */
function pairWithTargetSum (arr, targetSum) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array')
  }

  if (typeof targetSum !== 'number') {
    throw new Error('targetSum must be a number')
  }

  if (arr.length === 0) {
    return null
  }

  const { binarySearch } = require('../binary_search/standard-binary-search')

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i]
    const y = targetSum - x
    const arrToSearch = arr.slice(i)

    const j = binarySearch(arrToSearch, y)

    if (j !== null) {
      return [i, j]
    }
  }

  return null
}

module.exports = {
  pairWithTargetSum
}
