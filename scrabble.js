var Scrabble = function() {
  const POINT_LIST = [
    ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    ["D", "G"],
    ["B", "C", "M", "P"],
    ["F", "H", "V", "W", "Y"],
    ["K"],
    ["J", "X"],
    ["Q", "Z"]
  ]
};

s = new Scrabble();
console.log(s.POINT_LIST);
// WHY IS THIS UNDEFINED??

Scrabble.prototype = {
  score: function(word) {
    var word = word.toUpperCase();
    var totalScore = 0;
    if (word.length == 7) { totalScore += 50; }
    for (var i=0; i < word.length; i++) {
      if (this.POINT_LIST[0].includes(word[i])) {
        totalScore += 1;
      } else if (this.POINT_LIST[1].includes(word[i])) {
        totalScore += 2;
      } else if (this.POINT_LIST[2].includes(word[i])) {
        totalScore += 3;
      } else if (this.POINT_LIST[3].includes(word[i])) {
        totalScore += 4;
      } else if (this.POINT_LIST[4].includes(word[i])) {
        totalScore += 5;
      } else if (this.POINT_LIST[5].includes(word[i])) {
        totalScore += 8;
      } else if (this.POINT_LIST[6].includes(word[i])) {
        totalScore += 10;
      };
    };
    return totalScore
  },

  highestScoreFrom: function(arrayOfWords) {
    var highestScore = 0;
    var word = "";
    for (var i = 0; i < arrayOfWords.length; i++) {
      if (this.score(arrayOfWords[i]) > highestScore) {
        highestScore = this.score(arrayOfWords[i]);
        word = arrayOfWords[i];
      } else if (this.score(arrayOfWords[i]) == highestScore) {
        if (arrayOfWords[i].length == 7 || arrayOfWords[i].length < word.length) {
          if (word.length != 7 ) {
            word = arrayOfWords[i];
          }
        };
      };
    };
    if (word === "") {
      word = "No High Score";
    };
    return word;
  }
};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

// module.exports = Scrabble;

/////////////////////////////
//////// Player /////////////
/////////////////////////////

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
console.log("########## SCRABBLE TESTS ##########");
console.log("####################################")

var s = new Scrabble();
console.log(s.score("ZZZ"));
console.log(s.highestScoreFrom(["ZZZ", "QQQ"])); // 'ZZZ'
console.log(s.highestScoreFrom(["cat", "aaaaa"])); // 'cat'
console.log(s.highestScoreFrom(["cat", "rat"])); // 'cat'
console.log(s.highestScoreFrom(["aaaaad", "aaaaaaa"])); // 'aaaaaaa'
console.log(s.score(""));
console.log("Cat: " + s.score("cat"));
console.log(s.highestScoreFrom(["", ""]));


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
