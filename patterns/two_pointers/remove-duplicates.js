/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the
 * duplicates in place return the new length of the array.
*/

/**
 * Iterate through the array while remembering the position
 * of where we should put the next non duplicate.
 * When iterating, skip all the duplicate numbers. When
 * we find a non duplicate number, put that in the position
 * that we remember.
 *
 * Time Complexity O(N)
 * Space Complexity O(1)
 */
function removeDuplicates (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array')
  }

  if (arr.length < 2) {
    return arr.length
  }

  let indexForNextNonDuplicate = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue
    } else {
      indexForNextNonDuplicate += 1
      arr[indexForNextNonDuplicate] = arr[i]
    }
  }

  return indexForNextNonDuplicate
}

module.exports = {
  removeDuplicates
}
