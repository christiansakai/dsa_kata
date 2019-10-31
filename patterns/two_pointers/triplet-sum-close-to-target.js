/**
 * Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the
 * target number as possible, return the sum of the triplet.
 */

/**
 * Sort the array so that the same numbers are close to one another.
 * Iterate through the array, and for every item in the array,
 * find the other two numbers.
 * Use two pointers approach. Start from the index after the first number
 * to the end of the array.
 * If the total number is the same as target number, we have found
 * the smallest sum triplet, so we return the sum of these triplets.
 * If the total number is smaller than the target number, we
 * calculate the difference. If the difference is the smallest so far,
 * we remember this triplet. Increment the left pointer, because
 * we can still find a bigger sum so that the sum is even closer
 * to the target sum.
 * If the total number is smaller than the target number, we
 * calculate the difference. If the difference is the smallest so far,
 * we remember this triplet. Decrement the right pointer, because
 * we can still find a smaller sum so that the sum is even closer
 * to the target sum.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
*/
function tripletSumCloseToTarget (arr, targetSum) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length < 3) {
    return null
  }

  const sortedArr = arr.sort((a, b) => a - b)

  let triplet = []
  let smallestDiff = Number.POSITIVE_INFINITY

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let j = i + 1
    let k = sortedArr.length - 1

    while (j < k) {
      const sum = sortedArr[i] + sortedArr[j] + sortedArr[k]

      if (sum === targetSum) {
        return sumTriplet([
          sortedArr[i],
          sortedArr[j],
          sortedArr[k]
        ])
      } else if (sum < targetSum) {
        const diff = Math.abs(targetSum - sum)

        if (diff < smallestDiff) {
          smallestDiff = diff

          triplet = [
            sortedArr[i],
            sortedArr[j],
            sortedArr[k]
          ]
        }

        j += 1
      } else {
        const diff = Math.abs(targetSum - sum)

        if (diff < smallestDiff) {
          smallestDiff = diff

          triplet = [
            sortedArr[i],
            sortedArr[j],
            sortedArr[k]
          ]
        }

        k -= 1
      }
    }
  }

  return sumTriplet(triplet)
}

function sumTriplet (triplet) {
  return triplet.reduce((acc, a) => acc + a, 0)
}

module.exports = {
  tripletSumCloseToTarget
}
