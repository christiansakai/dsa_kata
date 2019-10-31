/**
 * Given an array of unsorted number and a target sum,
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target
 * where i, j, k are three different indices. Write a function to return
 * the count of such triplets.
 */

/**
*/
function tripletsWithSmallerSum (arr, target) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (typeof target !== 'number') {
    throw new Error('targetSum must be a number')
  }

  if (arr.length < 3) {
    return null
  }
}
