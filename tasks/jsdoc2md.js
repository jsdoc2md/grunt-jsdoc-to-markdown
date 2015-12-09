'use strict'
var jsdoc2md = require('jsdoc-to-markdown')
var fs = require('fs')
var path = require('path')

module.exports = function (grunt) {
  grunt.registerMultiTask('jsdoc2md', 'API documentation generator', function () {
    var self = this
    var done = this.async()
    var options = this.options()
    var monitor = {
      finished: 0,
      done: function () {
        this.finished++
        if (this.finished === self.files.length) done()
      }
    }

    this.files.forEach(function (file) {
      var outputPath = file.dest
      options.src = file.src
      var renderStream = jsdoc2md(options)
      grunt.log.oklns('writing ' + outputPath)
      renderStream.on('error', grunt.fail.fatal)
      renderStream.on('end', function () {
        monitor.done()
      })

      grunt.file.mkdir(path.dirname(outputPath))
      renderStream.pipe(fs.createWriteStream(outputPath))
    })
  })
}
