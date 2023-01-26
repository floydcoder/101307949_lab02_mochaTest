var assert = require('assert');

// create a container test
describe('calculator', function () {
  // multiplication test
  describe('Multiplication', function () {
    // CASE 5 * 3 = 15
    it('should be 15 when 5 is multiplied by 3', function () {
      // perform the test
      var result = 5 * 3;
      // assert such case
      assert.equal(result, 15);
    });

    // CASE 5 * 5 = 25
    it('should be 25 when 5 is multiplied by 5', function () {
      // perform the test
      var result = 5 * 5;
      var value = 23;
      // assert such case
      assert.equal(result, value);
    });
  });

  // division test
  describe('Divide', function () {
    // CASE 15 / 2 = 3
    it('Should not equal 2 when 15 is divided by 5', function () {
      // perform the test
      var value = 2;
      var result = 15 / 5;
      // assert such case
      assert.notEqual(result, value);
    });

    // CASE 49 / 7 = 7
    it('49 Divided by 7 should return 7', function () {
      // perform test
      var result = 49 / 7;
      var value = 9;
      assert.equal(result, value);
    });
  });
});
