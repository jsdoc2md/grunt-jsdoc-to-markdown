[![view on npm](http://img.shields.io/npm/v/grunt-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/grunt-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/grunt-jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/grunt-jsdoc-to-markdown.svg?branch=next)](https://travis-ci.org/75lb/grunt-jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/grunt-jsdoc-to-markdown.svg)](https://david-dm.org/75lb/grunt-jsdoc-to-markdown)

#grunt-jsdoc-to-markdown@next (preview release)
A grunt plugin for [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).

This is a preview release for the next version so feedback is welcome at this point! 

Try generating your docs using this preview plugin.. Any issues or feedback, let me know! 

##Install
```sh
$ npm install grunt-jsdoc-to-markdown@next --save-dev
```

##Usage
Example `Gruntfile.js`:

```js
"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc2md: {
            oneOutputFile: {
                src: "src/*.js",
                dest: "api/documentation.md"
            },
            separateOutputFilePerInput: {
                files: [
                    { src: "src/jacket.js", dest: "api/jacket.md" },
                    { src: "src/shirt.js", dest: "api/shirt.md" }
                ]
            },
            withOptions: {
                options: {
                    "no-gfm": true
                },
                src: "src/wardrobe.js",
                dest: "api/with-index.md"
            }
        }
    });

    grunt.loadNpmTasks("grunt-jsdoc-to-markdown");
    grunt.registerTask("default", "jsdoc2md");
};
```
