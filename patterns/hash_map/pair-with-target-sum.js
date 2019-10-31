/**
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is qual to the given target.
 */

/**
 * Keep a hash map of number as key and index as value.
 * As we iterate the array, fill the hash map and see if the
 * complement number already in the hash map.
 * If the complement number already in the hash map, we have
 * found the pair.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param {number[]} arr - The array of numbers
 * @param {number} targetSum - The target sum
 * @returns {number[]} - The pair of numbers
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

  const hashMap = {}

  for (let i = 0; i < arr.length - 1; i++) {
    const x = arr[i]
    const y = targetSum - x

    if (hashMap[y] !== undefined) {
      return [i, hashMap[y]]
    }

    hashMap[x] = i
  }

  return null
}

module.exports = {
  pairWithTargetSum
}
