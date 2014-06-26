"use strict";
var jsdoc2md = require("jsdoc-to-markdown");

module.exports = function(grunt) {

  grunt.registerMultiTask("jsdoc2md", "API documentation generator", function() {
    var self = this;
    var done = this.async();
    var options = this.options();
    var monitor = {
        finished: 0,
        done: function(){
            this.finished++;
            if (this.finished === self.files.length) done();
        }
    };

    this.files.forEach(function(file){
        options.src = file.src;
        var outputPath = file.dest;
        jsdoc2md.render(options, function(err, result){
            if (err) grunt.fail.fatal(err);
            grunt.file.write(outputPath, result);
            grunt.log.oklns(result.length + " bytes written to " + outputPath);
            monitor.done();
        });
    });
  });

};
