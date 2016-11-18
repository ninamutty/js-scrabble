var Scrabble = require('./scrabble');


var Tilebag = function() {
  this.BEGIN_TILES = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B","C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

  this.tiles = this.BEGIN_TILES;
};


Tilebag.prototype = {

  drawTiles: function(num = 1) {
    pulledTiles = [];
    for (var i=0; i < num; i++) {
      randomNumber = Math.floor(Math.random() * this.tiles.length);
      pulledTiles.push(this.tiles.splice(randomNumber, 1)[0]);
    }
    return pulledTiles;
  }
};

var a = new Tilebag();
// console.log(shuffle(a.tiles));

console.log("First: " + a.drawTiles(20));
console.log("Tiles: " + a.tiles);
console.log("Second: " + a.drawTiles(20));

module.exports = Tilebag;
