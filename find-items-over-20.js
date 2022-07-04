function findItemsOver20(insert){
    var answer = []
    for (var i=0; i< insert.length; i++){
      let item = insert[i];
      if (item.qty > 20){
       // console.log(item.name + ' ' + item.qty);
       answer.push(item);}
      } 
     
    return answer    
    }