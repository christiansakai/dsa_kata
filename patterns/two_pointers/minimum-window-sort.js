/**
 * Given an array, find the length of the smallest subarray in it
 * which when sorted will sort the whole array.
 */

/**
 * Iterate using two pointers from the start and end to find
 * a candidate window that needs to be sorted.
 * Then within this window, we find the max and min.
 * Then we gradually extend from the candidate window,
 * to see if there are numbers outside the window
 * that is bigger than the min and smaller than the max.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function shortestWindowSort (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an array')
  }

  if (arr.length < 2) {
    return arr.length
  }

  if (arr[0] > arr[arr.length - 1]) {
    return arr.length
  }

  let candidateStart = 0
  let candidateEnd = arr.length - 1

  while (arr[candidateStart] < arr[candidateStart + 1] &&
          candidateStart < candidateEnd) {
    candidateStart += 1
  }

  // The entire array is already sorted
  if (candidateStart === arr.length - 1) {
    return 0
  }

  while (arr[candidateEnd - 1] < arr[candidateEnd] &&
          candidateStart < candidateEnd) {
    candidateEnd -= 1
  }

  const { min, max } = findMinMaxInCandidate(
    arr,
    candidateStart,
    candidateEnd
  )

  const indexSmallerThanMin = findIndexBiggerThanMin(
    min,
    arr,
    candidateStart
  )

  const indexBiggerThanMax = findIndexSmallerThanMax(
    max,
    arr,
    candidateEnd
  )

  return indexBiggerThanMax - indexSmallerThanMin + 1
}

function findMinMaxInCandidate (arr, from, to) {
  let min = arr[from]
  let max = arr[from]

  for (let i = from + 1; i <= to; i++) {
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i])
  }

  return { min, max }
}

function findIndexBiggerThanMin (min, arr, from) {
  let smallestIndex = from

  for (let i = from; i >= 0; i--) {
    if (arr[i] > min) {
      smallestIndex = i
    }
  }

  return smallestIndex
}

function findIndexSmallerThanMax (max, arr, from) {
  let biggerIndex = from

  for (let i = from; i < arr.length; i++) {
    if (arr[i] < max) {
      biggerIndex = i
    }
  }

  return biggerIndex
}

module.exports = {
  shortestWindowSort
}
