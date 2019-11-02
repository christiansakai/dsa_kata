/**
 * Suppose you are given an array containing non-negative numbers
 * representing heights of a set of buildings.
 * Now, because of differences in heights of buildings water
 * can be trapped between them. Find the two buildings that will
 * trap the most amount of water. Write a function that will
 * return the maximum volume of water that will be trapped
 * between these two buildings.
*/

/**
 * Iterate through the building heights.
 * Use two pointers. left and right.
 * If the height of the building on the left is lesser than right
 * then the left pointer should move forward, because it might
 * find taller building. Else, the right pointer should move
 * backward because it might find taller building.
 * While iterating, calculate the biggest volume.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function findMaxWater (buildingHeights) {
  if (!Array.isArray(buildingHeights)) {
    throw new Error('buildingHeights must be an array')
  }

  if (buildingHeights.length < 2) {
    return 0
  }

  let left = 0
  let right = buildingHeights.length - 1

  let maxWater = 0

  while (left < right) {
    const leftHeight = buildingHeights[left]
    const rightHeight = buildingHeights[right]

    const water = calculateWater(
      left,
      leftHeight,
      right,
      rightHeight
    )

    maxWater = Math.max(maxWater, water)

    if (leftHeight < rightHeight) {
      left += 1
    } else {
      right -= 1
    }
  }

  return maxWater
}

function calculateWater (left, leftHeight, right, rightHeight) {
  const height = Math.min(leftHeight, rightHeight)
  const distance = right - left

  return height * distance
}

module.exports = {
  findMaxWater
}
