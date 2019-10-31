/**
 * Given an array of sorted numbers and a target sum,
 * find a pair in the array whose sum is qual to the given target.
 */

/**
 * Use two pointers, left and right.
 * If the numbers pointed by left and right is the same as target sum,
 * we have found our pair.
 * If the numbers pointed by left and right is smaller than target sum,
 * increment the left pointer because we need a bigger number.
 * If the numbers pointed by left and right is bigger than the target sum,
 * decrement the right pointer because we need a smaller number.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
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

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]

    if (sum === targetSum) {
      return [left, right]
    } else if (sum < targetSum) {
      left += 1
    } else {
      right -= 1
    }
  }

  return null
}

module.exports = {
  pairWithTargetSum
}
