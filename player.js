var Scrabble = require('./scrabble');


var Player = function(name) {
  this.name = name;
  this.plays = [];
};


  // Put all of this in prototype
Player.prototype = {
  play: function(add) {
    return this.plays.push(add);
  },

  totalScore: function() {
    total = 0;
    scrabble = new Scrabble();
    for(var i=0; i < this.plays.length; i++) {
      total += scrabble.score(this.plays[i]);
    };
    return total;
  },

  hasOne: function() {
    if (this.totalScore(this.plays) >= 100) {
      return true;
    } else {
      return false;
    };
  },

  highestScoringWord: function() {
    scrabble = new Scrabble();
    return scrabble.highestScoreFrom(this.plays);
  },

  highestWordScore: function() {
    scrabble = new Scrabble();
    return scrabble.score(scrabble.highestScoreFrom(this.plays));
  }
};

// Player.prototype.plays = function() {
//   return plays
// }



console.log("####################################")
console.log("########## PLAYER TESTS ##########");
console.log("####################################")
nina = new Player("Nina");
console.log(nina.name);
console.log(nina.plays);

nina.play("cat");
nina.play("dog");
nina.play("fish");
console.log(nina.plays);
console.log("Total Score: " + nina.totalScore());
console.log("Has One: " + nina.hasOne());
nina.play("ZZZQZZZ");
console.log("Total Score: " + nina.totalScore());
console.log("Has One: " +  nina.hasOne());
console.log("Highest Scoring Word: " + nina.highestScoringWord());
console.log("Highest Word Score: " + nina.highestWordScore());



module.exports = Player;
