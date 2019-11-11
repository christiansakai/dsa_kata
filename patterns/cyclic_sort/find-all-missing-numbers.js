/**
*/

/**
 *
 * Time Complexity
 * Space Complexity
 */
function findMissingNumbers (nums) {
  if (!Array.isArray(nums)) {
    throw new Error('nums must be an array')
  }

  const sorted = cyclicSort(nums)

  return findNullElementIndexes(sorted)
}

function cyclicSort (nums) {
  let i = 0

  while (i < nums.length) {
    const num = nums[i]

    if (num !== null) {
      const from = num - 1
      const to = i

      if (from !== to) {
        if (to >= nums.length) {
          nums[from] = null
          i += 1
        } else {
          if (nums[to] === num) {
            nums[from] = null
            i += 1
          } else {
            swap(nums, from, to)
          }
        }
      } else {
        i += 1
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

function findNullElementIndexes (arr) {
  const indexes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      indexes.push(i)
    }
  }

  return indexes
}

module.exports = {
  findMissingNumbers
}
