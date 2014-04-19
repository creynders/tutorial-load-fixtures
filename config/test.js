'use strict';

module.exports = function(grunt, options){
  return {
    tasks : {
      jshint : {
        test      : {
          src : ['test/**/*.js']
        }
      },
      nodeunit : {
        files : ['test/**/*_test.js']
      }
    }
  }
}