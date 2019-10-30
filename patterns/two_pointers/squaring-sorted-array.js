/**
 * Given an increasing sorted array with numbers ranging from negative numbers to positive numbers, return a new array containing squares of all the number of the input array in the sorted order.
 * @module patterns/two_pointers/squaring-sorted-array

/**
 * Find first non negative index. From that index, make two pointers.
 * Iterate the pointers alternately, compare the square.
 * Push the number that has the smaller square, and increment that pointer.
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function makeSquares1 (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length <= 1) {
    return arr
  }

  const squares = Array(arr.length).fill(0)

  let lowestSquareIndex = 0
  const startingIndex = findFirstNonNegativeIndex(arr)
  squares[lowestSquareIndex] = arr[startingIndex]
  lowestSquareIndex += 1

  let leftPointer = startingIndex - 1
  let rightPointer = startingIndex + 1

  while (leftPointer >= 0 || rightPointer < arr.length) {
    let sqrLeft
    if (leftPointer >= 0) {
      sqrLeft = Math.pow(arr[leftPointer], 2)
    }

    let sqrRight
    if (rightPointer < arr.length) {
      sqrRight = Math.pow(arr[rightPointer], 2)
    }

    if (sqrLeft !== undefined && sqrRight !== undefined) {
      if (sqrLeft < sqrRight) {
        squares[lowestSquareIndex] = sqrLeft
        leftPointer -= 1
      } else {
        squares[lowestSquareIndex] = sqrRight
        rightPointer += 1
      }
    } else if (sqrLeft !== undefined && sqrRight === undefined) {
      squares[lowestSquareIndex] = sqrLeft
      leftPointer -= 1
    } else {
      squares[lowestSquareIndex] = sqrRight
      rightPointer += 1
    }

    lowestSquareIndex += 1
  }

  return squares
}

function findFirstNonNegativeIndex (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      return i
    }
  }
}

/**
 * Make two pointers, one at the beginning of the array
 * and one at the end of the array.
 * Since if we square the items that these pointers point we
 * will get the largest numbers, we can fill the array from the back.
 * Iterate the pointers alternately, compare the square and unshift
 * the array.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function makeSquares2 (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length <= 1) {
    return arr
  }

  const squares = Array(arr.length).fill(0)

  let i = 0
  let j = arr.length - 1
  let highestSquareIndex = arr.length - 1

  while (i < j) {
    const sqrI = Math.pow(arr[i], 2)
    const sqrJ = Math.pow(arr[j], 2)

    if (sqrI > sqrJ) {
      squares[highestSquareIndex] = sqrI
      i += 1
    } else {
      squares[highestSquareIndex] = sqrJ
      j -= 1
    }

    highestSquareIndex -= 1
  }

  return squares
}

module.exports = {
  makeSquares1,
  makeSquares2
}
