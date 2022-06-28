function indexPrime(param1){
    if (param1 === 1){
        return 2;   
    }
    else{
        var arrPrime = [2];
        var currentNumber = 3;
        var isPrime;
        while (arrPrime.length < param1) {
            isPrime = true;
            for(var i = 0; i < arrPrime.length; i++){
                if(currentNumber % arrPrime[i] === 0){
                    isPrime = false;
                }
            }
            if (isPrime){
                arrPrime.push(currentNumber)
            }
            currentNumber += 1;
        }
        return arrPrime[arrPrime.length-1];
    }

}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));