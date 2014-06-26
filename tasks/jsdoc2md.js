"use strict";
var jsdoc2md = require("jsdoc-to-markdown");

module.exports = function(grunt) {

  grunt.registerMultiTask("jsdoc2md", "API documentation generator", function() {
    var done = this.async();
    var options = this.options();

    // console.log(JSON.stringify(this.files, null, "  "));
    
    this.files.forEach(function(file){
        options.src = file.src;
        var outputPath = file.dest;
        
        console.log(JSON.stringify(options, null, "  "));
        console.log(outputPath);
        
        jsdoc2md.render(options, function(err, result){
            if (err) grunt.fail.fatal(err);
            grunt.file.write(outputPath, result);
            grunt.log.oklns(result.length + " bytes written to " + outputPath);
        });
    });
    
    done();
  });

};
