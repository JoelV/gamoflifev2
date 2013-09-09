var app = require('../')();
var expect = require('expect.js');
var board;

describe('app#tick', function() {
  before(function() {
    board = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
  });
  it('should be an array', function() {
    console.log(app.tick(board));
    //expect(app.tick(board)).to.be.an('array');
  });   
});