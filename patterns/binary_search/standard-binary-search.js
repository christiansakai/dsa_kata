/**
 * Binary search an item inside a sorted array.
 * Time Complexity: O(N log N)
 * Space Complexity: O(1)
 *
 * @param {string[]|number[]} arr - The array that might contains an item
 * @param {string|number} item - The item that this function needs to find
 * @returns {number} - The index of the item, return -1 if item not found
 */
function binarySearch (arr, item) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (!item) {
    throw new Error('item must be supplied')
  }

  if (arr.length === 0) {
    return null
  }

  let bottom = 0
  let top = arr.length - 1

  while (bottom < top) {
    const mid = bottom + Math.floor((top - bottom) / 2)

    if (item === arr[mid]) {
      return mid
    } else if (item < arr[mid]) {
      top = mid - 1
    } else {
      bottom = mid + 1
    }
  }

  return -1
}

module.exports = {
  binarySearch
}
