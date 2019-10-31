const fs = require('fs')
const path = require('path')

function generateFile () {
  const pathFileToGenerate = process.argv[2]

  if (!pathFileToGenerate) {
    console.log(`Usage:
  npm run generate patterns/binary_search/binary-search-magic`)
    return process.exit(1)
  }

  const fullPath = path.join(process.cwd(), `${pathFileToGenerate}.js`)

  if (fs.existsSync(fullPath)) {
    console.log(`path ${pathFileToGenerate}.js already exist`)
    return process.exit(1)
  }

  const solutionFileString = getSolutionFileTemplateString()
  const testFileString = getTestFileTemplateString(pathFileToGenerate)

  const solutionFilePath = fullPath
  const testFilePath = path.join(process.cwd(), `${pathFileToGenerate}.spec.js`)

  fs.writeFileSync(solutionFilePath, solutionFileString)
  fs.writeFileSync(testFilePath, testFileString)

  console.log(`Generated:
${solutionFilePath}
${testFilePath}
`)
}

function getSolutionFileTemplateString () {
  const solutionFileTemplate = `/**
*/

/**
 *
 * Time Complexity
 * Space Complexity
 */
function theFunction () {

}

module.exports = {
  theFunction
}`

  return solutionFileTemplate
}

function getTestFileTemplateString (pathFileToGenerate) {
  const testFileTemplate = `const solution = require('./${pathFileToGenerate}')

describe('The Problem', () => {
  describe('The Function', () => {
    it('what it should do', () => {
      const result = solution.theFunction()

      expect(result).toEqual(true)
    })
  })
})
`

  return testFileTemplate
}

generateFile()
