/**
 * We are given an array containing ‘n’ objects.
 * Each object, when created, was assigned a unique number
 * from 1 to ‘n’ based on their creation sequence.
 * This means that the object with sequence number ‘3’
 * was created just before the object with sequence number ‘4’.
 *
 * Write a function to sort the objects in-place on their creation
 * sequence number in O(N) and without any extra space.
 * For simplicity, let’s assume we are passed an integer array
 * containing only the sequence numbers,
 * though each number is actually an object.
*/

/**
 * Iterate through the array.
 * While iterating, check if the number is in place.
 * If it is not in place, then swap it, but don't increment
 * the iteration yet because it might still be out of place.
 * Keep swapping until it is in place, then move to the next
 * iteration.
 *
 * Time Complexity O(N)
 * Space Complexity O(1)
 */
function cyclicSort (nums) {
  if (!Array.isArray(nums)) {
    throw new Error('nums must be an array')
  }

  let i = 0
  while (i < nums.length) {
    const num = nums[i]

    if (i !== num - 1) {
      swap(nums, i, num - 1)
    } else {
      i += 1
    }
  }

  return nums
}

function swap (arr, from, to) {
  const temp = arr[from]
  arr[from] = arr[to]
  arr[to] = temp
}

module.exports = {
  cyclicSort
}
