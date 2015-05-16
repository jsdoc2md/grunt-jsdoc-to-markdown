"use strict";
var jsdoc2md = require("jsdoc-to-markdown");
var mfs = require("more-fs");
var concat = require("concat-files");

module.exports = function(grunt) {
    grunt.registerMultiTask("jsdoc2md", "API documentation generator", function() {
        var self = this;
        var done = this.async();
        var options = this.options();
        var monitor = {
            finished: 0,
            done: function(){
                monitor.finished++;
                if (monitor.finished === self.files.length) done();
            }
        };

        function concatMD(concatOptions, cb) {
            var files = [];
            if (concatOptions.intro) {
                files.push(concatOptions.intro); 
            }

            files.push(concatOptions.outputPath);

            if (concatOptions.end) {
                files.push(concatOptions.end); 
            }

            mfs.mkdir('.concat-tmp');
            concat(files, '.concat-tmp/temp.md', function() {
                mfs.duplicate('.concat-tmp/temp.md', concatOptions.outputPath);
                mfs.deleteFile('.concat-tmp/temp.md');
                mfs.rmdir('.concat-tmp');
                cb();
            });
        }

        this.files.forEach(function(file){
            var outputPath = file.dest;
            options.src = file.src;
            var renderStream = jsdoc2md(options);
            grunt.log.oklns("writing " + outputPath);
            renderStream.on("error", grunt.fail.fatal);
            renderStream.on("end", function(){
                console.log(options);
                if (options.introMd || options.endMd) {
                    var concatOptions = {
                        intro: options.introMd,
                        outputPath: outputPath,
                        end: options.endMd
                    };
                    concatMD(concatOptions, monitor.done); 
                } else {
                    monitor.done(); 
                }    
            });

            /* dest directories will be created if they don't exist  */
            renderStream.pipe(mfs.writeStream(outputPath));
        });
    });
};
