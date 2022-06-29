function enoughAirtime(string, money) {
    let total = 0;
    const call = 1.88;
    const data = 12.00;
    const sms = 0.75;

    let list = string.split(",");
    for (var i = 0; i < list.length; i++) {
        if (list[i] === "call") {
            total = total + call;
        }
        else if (list[i] === "data") {
            total = total + data;
        }
        else {
            total = total + sms
        }
    }

    let difference = money - total;
    if (difference > 0) {
        return "R" + difference.toFixed(2);
    }
    else { return "R0.00"; }
}