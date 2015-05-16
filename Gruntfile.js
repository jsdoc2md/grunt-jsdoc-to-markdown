"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc2md: {
            oneOutputFile: {
                src: "test/fixture/*.js",
                dest: "test/output/docs.md"
            },
            oneOutputFileWithExtraMarkdown: {
                src: "test/fixture/*.js",
                dest: "test/output/docsWithExtraMarkdown.md",
                options: {
                    "introMd": "test/begin.md",
                    "endMd": "test/end.md"
                }
            },
            separateOutputFiles: {
                files: [
                    { src: "test/fixture/class.js", dest: "test/output/class.md" },
                    { src: "test/fixture/typedef.js", dest: "test/output/typedef.md" }
                ]
            },

            withOptions: {
                options: {
                    "no-gfm": true
                },
                src: "test/fixture/object.js",
                dest: "test/output/no-gfm.md"
            }
        }
    });

    grunt.loadTasks("tasks");
    grunt.registerTask("default", "jsdoc2md");  
};
