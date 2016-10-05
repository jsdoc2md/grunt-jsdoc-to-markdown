'use strict'
var jsdoc2md = require('jsdoc-to-markdown')
var fs = require('fs')
var path = require('path')

module.exports = function (grunt) {
  grunt.registerMultiTask('jsdoc2md', 'API documentation generator', function () {
    var options = this.options()
    var done = this.async()

    var promises = this.files.map(function (file) {
      var outputPath = file.dest
      grunt.file.mkdir(path.dirname(outputPath))
      options.files = file.src
      grunt.log.oklns('writing ' + outputPath)
      return jsdoc2md.render(options)
        .then(function (output) {
          fs.writeFileSync(outputPath, output)
        })
        .catch(grunt.fail.fatal)
    })

    Promise.all(promises).then(done)
  })
}
