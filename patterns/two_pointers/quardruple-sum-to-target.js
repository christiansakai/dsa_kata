/**
 * Given an array of unsorted numbers and a target number,
 * find all unique quadruplets in it, whose sum is equal
 * to the arget number.
*/

/**
 * Same approach as Triplet Sum to Zero. This just
 * adds another for loop.
 *
 * Time Complexity: O(N^3)
 * Space Complexity: O(N) // for new sorted array
 */
function searchQuadruplets (arr, target) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (typeof target !== 'number') {
    throw new Error('targetSum must be a number')
  }

  if (arr.length < 3) {
    return null
  }

  const sortedArr = arr.sort((a, b) => a - b)
  const quadruplets = []

  for (let i = 0; i < sortedArr.length - 4; i++) {
    const remaining1 = target - sortedArr[i]

    for (let j = i + 1; j < sortedArr.length - 3; j++) {
      const remaining2 = remaining1 - sortedArr[j]

      let k = j + 1
      let l = sortedArr.length - 1

      while (k < l) {
        const sum = arr[k] + arr[l]

        if (sum === remaining2) {
          quadruplets.push([
            arr[i],
            arr[j],
            arr[k],
            arr[l]
          ])

          k += 1
          l -= 1
        } else if (sum < remaining2) {
          k += 1
        } else {
          l -= 1
        }
      }
    }
  }

  return quadruplets
}

module.exports = {
  searchQuadruplets
}
