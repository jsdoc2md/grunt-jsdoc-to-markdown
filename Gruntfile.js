"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc2md: {
            oneOutputFile: {
                src: "test/fixture/*.js",
                dest: "tmp/docs.md"
            },
            separateOutputFiles: {
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

    grunt.loadTasks("tasks");
    grunt.registerTask("default", "jsdoc2md");  
};
