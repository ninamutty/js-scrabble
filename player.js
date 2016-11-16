
var Player = function(name) {
  this.name = name;
  this.plays = [];

  this.play = function(add) {
    return this.plays.push(add);
  };

  this.totalScore = function(playsArray) {
    total = 0;
    scrabble = new Scrabble();
    for(var i=0; i < playsArray.length; i++) {
      total += scrabble.score(playsArray[i])
    };
    return total;
  };

};

// Player.prototype.plays = function() {
//   return plays
// }





nina = new Player("Nina");
console.log(nina.name);
console.log(nina.plays);

nina.play("cat");
nina.play("dog");
nina.play("fish");
console.log(nina.plays);

console.log(nina.totalScore(nina.plays));
