/**
 * Given an array of unsorted numbers, find all unique
 * triplets in it that add up to zero.
 */

/**
 * Sort the array so that same numbers are close to one another.
 * Iterate through the array, skipping same numbers. In this way
 * we make sure that the first number that we choose are the last of its kind.
 * This number will be our first number in the triplet.
 * To find the next numbers, we subtract 0 to our first number,
 * then we start searching the array using the same method
 * as `unique-pairs-with-target-sum`.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */
function searchTriplets (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length < 3) {
    return []
  }

  const sortedArr = arr.sort((a, b) => a - b)
  const triplets = []

  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      continue
    }

    const remaining = 0 - sortedArr[i]

    let j = i + 1
    let k = sortedArr.length - 1

    while (j < k) {
      const sum = sortedArr[j] + sortedArr[k]

      if (sum === remaining) {
        while (j < k && sortedArr[j] === sortedArr[j + 1]) {
          j += 1
        }

        while (j < k && sortedArr[k] === sortedArr[k - 1]) {
          k -= 1
        }

        triplets.push([
          sortedArr[i],
          sortedArr[j],
          sortedArr[k]
        ])

        j += 1
        k -= 1
      } else if (sum < remaining) {
        j += 1
      } else {
        k -= 1
      }
    }
  }

  return triplets
}

module.exports = {
  searchTriplets
}
