/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place.
 * You should treat the numbers of the array as objects, hence, we
 * can't count 0s, 1s and 2s to recreate the array.
 *
 * The flag of the Netherlands consist of three colors: red, white and blue;
 * and since our input array also consists of only three different
 * numbers that is why it is called Dutch National Flag problem.
*/

/**
 * We keep two pointers, start an end. If we encounter 0,
 * move that to the start pointer and increment that pointer.
 * If we encounter 2, move that to the end pointer and
 * decrement that pointer.
 * At the end of the loop, the 0s will be at the left side
 * and the 2s will be at the right side. Leaving 1s at the
 * middle.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function dutchFlagSort (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array')
  }

  if (arr.length < 3) {
    return arr
  }

  let start = 0
  let end = arr.length - 1

  let i = 0
  while (i <= end) {
    if (arr[i] === 0) {
      const temp = arr[start]

      arr[start] = arr[i]
      start += 1

      arr[i] = temp

      i += 1
    } else if (arr[i] === 1) {
      i += 1
    } else {
      // decrement 'high' only
      // because after the swap the number at index 'i'
      // could still be 0, 1, or 2
      const temp = arr[end]

      arr[end] = arr[i]
      end -= 1

      arr[i] = temp
    }
  }

  return arr
}

module.exports = {
  dutchFlagSort
}
