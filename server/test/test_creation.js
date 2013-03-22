/**
 * Uses mocha - http://visionmedia.github.com/mocha/
 */
 
var assert = require("assert");
var screenkit = require("../lib/screenkit.js");

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

// http://visionmedia.github.com/mocha/
describe('screenkit', function(){
	describe('create', function(){
		it('tests screenkit server is not null', function() {
			assert.notEqual(screenkit, null);
		})
	})
})