const Tom = require('test-runner').Tom
const exec = require('child_process').exec
const fs = require('fs')
const a = require('assert')

const tom = module.exports = new Tom('test')

tom.test('run grunt', function () {
  return new Promise(function (resolve, reject) {
    exec('grunt', function (err, stdout, stderr) {
      if (err) {
        return reject(err)
      } else {
        const output = fs.readFileSync('tmp/output/class.md', 'utf8')
        a.ok(/a class with all of the things/.test(output))
        console.log(output)
        resolve()
      }
    })
  })
})
