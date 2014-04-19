'use strict';

var main = require( '../lib/main.js' );
var fixtures = require( './fixtures' );

exports.tutorialLoadFixtures = {
  'awesome' : function( test ){
    test.expect( 1 );
    test.deepEqual( main.awesome(), fixtures.foo.bar, 'should be "value: Awesome!"' );
    test.done();
  }
};
