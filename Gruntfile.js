'use strict';

module.exports = function( grunt ){
  // Load all grunt tasks
  require( 'jit-grunt' )( grunt );

  // Show elapsed time at the end
  require( 'time-grunt' )( grunt );

  // Project configuration.
  grunt.initConfig( require('load-grunt-configs')(grunt) );

  // Default task.
  grunt.registerTask( 'default', ['jshint', 'nodeunit'] );

};
