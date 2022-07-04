function shortestWord (string) {
    var indWords = string.split(" ");
    var max = 9;
    var shortest = " ";
    for ( var i=0; i<indWords.length; i++){
      var word = indWords[i].trim();
      if (word.length <= max){
        max = word.length;
        shortest = word;
      }}
  
  return shortest;
  }