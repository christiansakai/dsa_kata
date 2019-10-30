const { binarySearch } = require('../binary_search/standard-binary-search')

function searchTriplets (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr must be an Array')
  }

  if (arr.length < 3) {
    return []
  }

  const sortedArr = arr.sort((a, b) => a - b)
}

module.exports = {
  searchTriplets
}
