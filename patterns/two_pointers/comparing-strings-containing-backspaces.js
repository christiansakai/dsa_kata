/**
 * Given two strings containing backspaces (identified by the # char),
 * check if two strings are equal.
*/

/**
 * Iterate together each string from behind. If we encounter a
 * backspace we skip the char to the number of backspaces.
 * In this way we remember the right char position on each string.
 * Then for every iteration, we check the char on each string
 * and see if they are not similar. If they are not similar,
 * then the string is not the same.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function backspacesCompare (str1, str2) {
  if (typeof str1 !== 'string') {
    throw new Error('str1 must be a string')
  }

  if (typeof str2 !== 'string') {
    throw new Error('str2 must be a string')
  }

  let p1 = str1.length - 1
  let p2 = str2.length - 1

  while (p1 >= 0 && p2 >= 0) {
    let backspacesP1Count = 0

    while (str1[p1] === '#') {
      backspacesP1Count += 1
      p1 -= 1
    }

    while (backspacesP1Count > 0) {
      p1 -= 1
      backspacesP1Count -= 1
    }

    let backspacesP2Count = 0

    while (str2[p2] === '#') {
      backspacesP2Count += 1
      p2 -= 1
    }

    while (backspacesP2Count > 0) {
      p2 -= 1
      backspacesP2Count -= 1
    }

    if (str1[p1] !== str2[p2]) {
      return false
    }

    p1 -= 1
    p2 -= 1
  }

  return true
}

module.exports = {
  backspacesCompare
}
