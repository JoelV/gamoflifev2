var _ = require('underscore');

module.exports = function() {
  var board, length, width;
  var top = left = function(n) {
    var z = n - 1;
    return z < 0 ? null : z;   
  };
  var bottom = function(n) {
    var z = n + 1;
    return z >= width ? null : z;  
  };
  var right = function(n) {
    var z = n + 1;
    return z >= length ? null : z;  
  };
  var middle = center = function(n) { return n; };
  var isAlive = function(x,y) {
    if(_.isNumber(x) && _.isNumber(y)) {
      return board[x][y];  
    }  
    else {
      return false;
    } 
  };
  var combine = function(x,y) {
    return _.partial(isAlive, x, y, board);
  };
  var random = function(x) {
    return Math.Math.random() + .5;
  };
  return {
    seed: function(x,y) {
      var b = [[]];

      var numAlive = random(x*y);
      /*
      while(numAlive !== 0) {
        _.each(b, function(row, i) {
          _.each(row[i], function(val){
            var r = random(1);
          }); 
        });
        numAlive--;
      }
      */
      console.log(numAlive);
      return numAlive;  
    },
    getNeighbors: function(x,y,b) {
      length = b[0].length;
      width = b.length;
      board = b;

      var topLeft = combine(top(x), left(y));
      var topMiddle = combine(top(x), middle(y));
      var topRight = combine(top(x), right(y));
      var centerLeft = combine(center(x), left(y));
      var centerRight = combine(center(x), right(y));
      var bottomLeft = combine(bottom(x), left(y));
      var bottomMiddle = combine(bottom(x), middle(y));
      var bottomRight = combine(bottom(x), right(y));

      var neighbors = [
        topLeft(),
        topMiddle(),
        topRight(),
        centerLeft(),
        centerRight(),
        bottomLeft(),
        bottomMiddle(),
        bottomRight()
      ];

      //console.log(neighbors);
      var alive = _.without(neighbors, false);      
      return alive.length;   
    }
  }
}