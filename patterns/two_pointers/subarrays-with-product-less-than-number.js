/**
 * Given an array with positive numbers and a target number,
 * find all of its contiguous subarrays whose product is less
 * than the target number.
*/

/**
 *
 * Time Complexity
 * Space Complexity
 */
function findSubArrays (arr, target) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (typeof target !== 'number') {
    throw new Error('target must be a number')
  }

  if (arr.length === 0) {
    return []
  }

  const subArrays = []

  let left = 0
  let right = 0

  let num = 1

  while (right < arr.length) {
    num *= arr[right]

    if (num < target) {
      subArrays.push(getActual(arr, left, right))
    } else {
      while (num >= target) {
        num /= arr[left]
        left += 1
      }

      while (left <= right) {
        subArrays.push(getActual(arr, left, right))
        left += 1
      }

      num = 1
    }

    right += 1
  }

  return subArrays
}

function getActual (arr, from, to) {
  const a = []
  for (let i = from; i <= to; i++) {
    a.push(arr[i])
  }

  return a
}

module.exports = {
  findSubArrays
}
