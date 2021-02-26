[![view on npm](https://badgen.net/npm/v/grunt-jsdoc-to-markdown)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![npm module downloads](https://badgen.net/npm/dt/grunt-jsdoc-to-markdown)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/grunt-jsdoc-to-markdown)](https://github.com/jsdoc2md/grunt-jsdoc-to-markdown/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/grunt-jsdoc-to-markdown)](https://github.com/jsdoc2md/grunt-jsdoc-to-markdown/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/jsdoc2md/grunt-jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/jsdoc2md/grunt-jsdoc-to-markdown)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# grunt-jsdoc-to-markdown

A grunt plugin for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). Accepts the same options as the [`render` method](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md#jsdoc2mdrenderoptions--promise).

## Install

```sh
$ npm install grunt-jsdoc-to-markdown --save-dev
```

## Usage

Example `Gruntfile.js`:

```js
'use strict'
module.exports = function (grunt) {
  grunt.initConfig({
    jsdoc2md: {
      oneOutputFile: {
        src: 'src/*.js',
        dest: 'api/documentation.md'
      },
      separateOutputFilePerInput: {
        files: [
          { src: 'src/jacket.js', dest: 'api/jacket.md' },
          { src: 'src/shirt.js', dest: 'api/shirt.md' }
        ]
      },
      withOptions: {
        options: {
          'no-gfm': true
        },
        src: 'src/wardrobe.js',
        dest: 'api/with-index.md'
      }
    }
  })

  grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
  grunt.registerTask('default', 'jsdoc2md')
}
```

* * *

&copy; 2014-21 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner).
