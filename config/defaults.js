'use strict';
module.exports = function(grunt, options){
  return {
    tasks : {
      jshint   : {
        options   : {
          jshintrc : '.jshintrc',
          reporter : require( 'jshint-stylish' )
        },
        gruntfile : {
          src : 'Gruntfile.js'
        },
        lib       : {
          src : ['lib/**/*.js']
        }
      }
    }
  }
}


