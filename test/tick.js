var app = require('../')();
var expect = require('expect.js');
var board;

describe('app#tick', function() {
  before(function() {
    board = [
      [true, false, true, false],
      [false, true, false, false],
      [true, true, false, true]
    ];
  });
  it('should be an array', function() {
    expect(app.tick(board)).to.be.an('array');
  });   
});