const TestRunner = require('test-runner')
const exec = require('child_process').exec
const fs = require('fs')
const runner = new TestRunner()
const a = require('assert')

runner.test('run grunt', function () {
  return new Promise(function (resolve, reject) {
    exec('grunt', function (err, stdout, stderr) {
      if (err) return reject(err)

      const output = fs.readFileSync('tmp/output/class.md', 'utf8')
      a.ok(/a class with all of the things/.test(output))
      resolve()
    })
  })
})
