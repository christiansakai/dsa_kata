/**
 * We are given an array containing ‘n’ distinct numbers
 * taken from the range 0 to ‘n’. Since the array has
 * only ‘n’ numbers out of the total ‘n+1’ numbers,
 * find the missing number.
*/

/**
 * We sort the array using Cyclic Sort algorithm.
 * Then we iterate over the array to check if there is
 * any missing item.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function findMissingNumber (nums) {
  if (!Array.isArray(nums)) {
    throw new Error('nums must be an array')
  }

  const sorted = cyclicSort(nums)

  return findNullElementIndex(sorted)
}

function cyclicSort (nums) {
  let i = 0

  while (i < nums.length) {
    const num = nums[i]

    if (num !== null && i !== num) {
      if (num >= nums.length) {
        nums[i] = null
      } else {
        swap(nums, i, num)
      }
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

function findNullElementIndex (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      return i
    }
  }

  return -1
}

module.exports = {
  findMissingNumber
}
