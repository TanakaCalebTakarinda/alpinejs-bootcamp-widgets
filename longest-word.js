function longestWord(string){
    var indWords = string.split(" ")
      var longest = "";
    for (var i=0; i< indWords.length; i++) {
      var word = indWords[i].trim();
      if (word.length >= longest.length){
        longest = word;
      }}
    
    return longest ;
    }