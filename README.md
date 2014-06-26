[![view on npm](http://img.shields.io/npm/v/grunt-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/grunt-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/grunt-jsdoc-to-markdown.svg)](https://david-dm.org/75lb/grunt-jsdoc-to-markdown)

#grunt-jsdoc-to-markdown
A grunt plugin for [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).

##Install
```sh
$ npm install grunt-jsdoc-to-markdown --save-dev
```

##Usage
Example `Gruntfile.js`:

```js
"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc2md: {
            oneOutputFile: {
                src: "test/fixture/*.js",
                dest: "tmp/docs.md"
            },
            separateOutputFilePerInput: {
                files: [
                    { src: "test/fixture/class.js", dest: "tmp/class.md" },
                    { src: "test/fixture/typedef.js", dest: "tmp/typedef.md" }
                ]
            },
            withOptions: {
                options: {
                    index: true
                },
                src: "test/fixture/object.js",
                dest: "tmp/with-index.md"
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc-to-markdown");
    grunt.registerTask("default", "jsdoc2md");
};
```
