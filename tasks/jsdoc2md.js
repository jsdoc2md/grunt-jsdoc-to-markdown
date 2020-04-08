const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const path = require('path')

module.exports = function (grunt) {
  grunt.registerMultiTask('jsdoc2md', 'API documentation generator', function () {
    const options = this.options()
    const done = this.async()
    const promises = this.files.map(function (file) {
      const outputPath = file.dest
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
