'use strict'
module.exports = function (grunt) {
  grunt.initConfig({
    jsdoc2md: {
      oneOutputFile: {
        src: 'test/fixture/*.js',
        dest: 'tmp/output/docs.md'
      },
      separateOutputFiles: {
        files: [
          { src: 'test/fixture/class.js', dest: 'tmp/output/class.md' },
          { src: 'test/fixture/typedef.js', dest: 'tmp/output/typedef.md' }
        ]
      },
      withOptions: {
        options: {
          'no-gfm': true

        },
        src: 'test/fixture/object.js',
        dest: 'tmp/output/no-gfm.md'
      }
    }
  })

  grunt.loadTasks('tasks')
  grunt.registerTask('default', 'jsdoc2md')
}
