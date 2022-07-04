function totalPhoneBill(string){
    let list = string.split(", ");
    let total= 0 ;
    const call = 2.75;
    const sms = 0.65;
    
    for( var i =0; i < list.length; i++){
      if (list[i] === "call"){
          total = total + call;}
      if (list[i] === "sms"){
          total = total + sms;}
      else 
      return "R" + total;
      }
      
    return "R"+ total.toFixed(2);
    }
  