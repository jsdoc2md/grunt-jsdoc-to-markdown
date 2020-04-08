const Tom = require('test-runner').Tom
const exec = require('child_process').exec
const fs = require('fs')
const a = require('assert')

const tom = module.exports = new Tom()

tom.test('run grunt', function () {
  return new Promise((resolve, reject) => {
    exec('grunt', (err, stdout, stderr) => {
      if (err) {
        return reject(err)
      } else {
        const output = fs.readFileSync('tmp/output/class.md', 'utf8')
        a.ok(/a class with all of the things/.test(output))
        resolve('class.md ok')
      }
    })
  })
})
