function searchTriplets (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length < 3) {
    return []
  }

  const sortedArr = arr.sort((a, b) => a - b)
  const triplets = []

  for (let i = 0; i < sortedArr; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }

    const x = arr[i]
    const yz = 0 - x
  }
}

function searchPair (
  sortedArr,
  targetSum,
  startingIndex,
  numToExclude
) {
  let left = startingIndex
  let right = sortedArr.length - 1

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right]

    if (sum === targetSum) {
      return [left, right]
    } else if (sum > targetSum) {
      right -= 1
    } else if (sum < targetSum) {
      left += 1
    }
  }
}

module.exports = {
  searchTriplets
}
