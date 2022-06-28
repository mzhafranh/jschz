function deretKaskus(n){
    var arrKaskus = [];
    var currentNumber;
    for(var i = 1; i <= n; i++){
        currentNumber = 3 * i;
        if (currentNumber % 30 === 0){
            arrKaskus.push("KASKUS");
        } else if (currentNumber % 6 === 0){
            arrKaskus.push("KUS");
        } else if (currentNumber % 5 === 0){
            arrKaskus.push("KAS");
        } else {
            arrKaskus.push(currentNumber);
        }
    }
    return arrKaskus;
}
console.log(deretKaskus(10));