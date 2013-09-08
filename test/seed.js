var app = require('../')();
var expect = require('expect.js');
var x, y;

describe('app#seed', function() {
  before(function() {
    x = 3;
    y = 3;  
  });
  it('should not be empty', function() {
    expect(app.seed(x,y)).to.be.an('array');
  });
});