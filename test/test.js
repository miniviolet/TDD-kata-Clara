var assert = require('assert');
var expect = require('chai').expect;

function addCalculator (string) {
	var int = string.match(/-?\d+/g); 

 	int === null  ? int = 0 : int;
	return Array.prototype.slice.call(int).reduce(function(prev, curr) {
    if ( curr < 0 || prev < 0) {
      throw err;
    } else {
      return parseInt(prev) + parseInt(curr);
    }
	}, 0);
}

var err = function negativeIntError () {
  return 'negatives not allowed';
};


describe('addCalculator', function() {
 var tests = [
     {string: "", expected: 0},
     {string: "1", expected: 1},
     {string: "1, 2", expected: 3},
     {string: "1\n2,3", expected: 6}
   ];

   tests.forEach(function(test) {
       it( 'should return ' + test.expected , function() {
         var res = addCalculator(test.string);
          assert.equal(res, test.expected);
       });
     });

   it('should return an error', function(){
    expect(function(){addCalculator('-1 boop -3');}).to.throw(err());
   });
});