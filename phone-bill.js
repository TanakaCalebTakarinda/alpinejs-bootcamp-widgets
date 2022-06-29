function totalPhoneBill(string){
    let list = string.split(", ");
    let total= 0
    const call = 2.75;
    const sms = 0.65;
    
    for( var i =0; i < list.length; i++){
      if (list[i] === "call") {
        total = total + call;}
      else 
      {total = total + sms; }
      }
      
    return "R"+ total.toFixed(2);
    }
  