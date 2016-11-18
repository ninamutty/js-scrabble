var Scrabble = function() {
  this.POINT_LIST = [
    ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    ["D", "G"],
    ["B", "C", "M", "P"],
    ["F", "H", "V", "W", "Y"],
    ["K"],
    ["J", "X"],
    ["Q", "Z"]
  ]
};

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


module.exports = Scrabble;



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
