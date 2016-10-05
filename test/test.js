var TestRunner = require('test-runner')
var exec = require('child_process').exec
var fs = require('fs')
var runner = new TestRunner()
var a = require('core-assert')

runner.test('run grunt', function () {
  return new Promise(function (resolve, reject) {
    exec('grunt', function (err, stdout, stderr) {
      if (err) return reject(err)

      var output = fs.readFileSync('tmp/output/class.md', 'utf8')
      a.ok(/a class with all of the things/.test(output))
      resolve()
    })
  })
})
