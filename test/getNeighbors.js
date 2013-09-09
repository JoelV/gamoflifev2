var app = require('../')();
var expect = require('expect.js');
var board;

describe('app#getNeighbors', function() {
  before(function() {
    board = [
      [true, false, true, false],
      [false, true, false, false],
      [true, true, false, true]
    ];
  });
  /*
  it('should return 1', function() {
    expect(app.getNeighbors(0,0, board)).to.eql(1);
  });
  it('should return 3', function() {
    expect(app.getNeighbors(0,1, board)).to.eql(3);
  });
  it('should return 1', function() {
    expect(app.getNeighbors(0,2, board)).to.eql(1);
  });
  it('should return 1', function() {
    expect(app.getNeighbors(0,3, board)).to.eql(1);
  })
  it('should return 4', function() {
    expect(app.getNeighbors(1,0, board)).to.eql(4);
  });
  it('should return 4', function() {
    expect(app.getNeighbors(1,1, board)).to.eql(4);
  });
  it('should return 3', function() {
    expect(app.getNeighbors(1,2, board)).to.eql(4);
  });
  it('should return 2', function() {
    expect(app.getNeighbors(1,3, board)).to.eql(2);
  })
  it('should return 2', function() {
    expect(app.getNeighbors(2,0, board)).to.eql(2);
  });
  it('should return 2', function() {
    expect(app.getNeighbors(2,1, board)).to.eql(2);
  });
  it('should return 2', function() {
    expect(app.getNeighbors(2,2, board)).to.eql(3);
  });
  it('should return 0', function() {
    expect(app.getNeighbors(2,3, board)).to.eql(0);
  });
*/
});
