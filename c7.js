function weirdMultiply(num){
    if (num < 10) {
        return num;
    }
    else {
        var digits = 0;
        var amount = num;
        while(amount > 1){
            amount = amount / 10;
            digits++;
        }
        var total = 1;
        var prevDig = 0;
        for(var i = 1; i <= digits; i++){
            total *= ((num % (10 ** i)) - prevDig) / (10 ** (i-1));
            prevDig = num % (10 ** i);
        }
        return (weirdMultiply(total));
    }
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
