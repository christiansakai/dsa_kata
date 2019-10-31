/**
 * Given an array of unsorted number and a target sum,
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target
 * where i, j, k are three different indices. Write a function to return
 * the count of such triplets.
 */

/**
 * Sort the array.
 * Iterate through the array. Every element in the iteration is
 * our first number. To find the second number, we start from the
 * first number index + 1, and the third number from the end of the array,
 * If we find a sum that is less than target sum, we have found
 * such triplet. Furthermore, since the array is sorted, now
 * we know that valid tiplets also can be made by the
 * numbers from the second number to the third number. We add
 * this into the calculation.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(N) // for new sorted array
*/
function tripletsWithSmallerSum1 (arr, target) {
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
  let tripletsCount = 0

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let j = i + 1
    let k = sortedArr.length - 1

    while (j < k) {
      const sum = sortedArr[i] + sortedArr[j] + sortedArr[k]

      if (sum < target) {
        tripletsCount += k - j

        j += 1
      } else {
        k -= 1
      }
    }
  }

  return tripletsCount
}

/**
 * Although a simpler approach with the same Time Complexity
 * can be done by just iterating three nested loops. In this approach
 * below we see how we can extend the code above.
 * Sort the array.
 * Iterate through the array. Every element in the iteration is
 * our first number. To find the second number, we start from the
 * first number index + 1, and the third number from the end of the array,
 * If we find a sum that is less than target sum, we have found
 * such triplet. Furthermore, since the array is sorted, now
 * we know that valid tiplets also can be made by the
 * numbers from the second number to the third number. We add
 * this into the calculation.
 *
 * Time Complexity: O(N^3)
 * Space Complexity: O(N) // for new sorted array
*/
function tripletsWithSmallerSum2 (arr, target) {
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
  const triplets = []

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let j = i + 1
    let k = sortedArr.length - 1

    while (j < k) {
      const sum = sortedArr[i] + sortedArr[j] + sortedArr[k]

      if (sum < target) {
        for (let x = k; x > j; x--) {
          triplets.push([
            sortedArr[i],
            sortedArr[j],
            sortedArr[x]
          ])
        }

        j += 1
      } else {
        k -= 1
      }
    }
  }

  return triplets
}

module.exports = {
  tripletsWithSmallerSum1,
  tripletsWithSmallerSum2
}
