/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the
 * duplicates in place return the new length of the array.
*/

/**
 *
 * Time Complexity
 * Space Complexity
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
