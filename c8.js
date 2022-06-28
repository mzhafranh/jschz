function pola(str){
    var arrWord = (str.split(" "));
    var num1 = arrWord[0];
    var multi = arrWord[2];
    var res = arrWord[4];
    var guess1 = 0;
    var guess2 = 0;
    var arrNum1 = [];
    var arrPosNum = [];
    var arrRes = [];
    var arrPosRes = [];
    var result = [];
    //Getting '#' index from num1
    for(var i = 0; i < num1.length; i++){
        if (num1[i] === "#"){
            guess1 = i;
        }
        arrNum1.push(num1[i]);
    }
    //Generating possible numbers in array
    for(var i = 0; i < 10; i++){
        arrPosNum[i] = "";
        for(var j = 0; j < num1.length; j++){
            if (j === guess1){
                arrPosNum[i] += i;
            }else{
                arrPosNum[i] += arrNum1[j];
            }
        }
        arrPosNum[i] = Number(arrPosNum[i]);
    }
    //Getting '#' index from res
    for(var i = 0; i < res.length; i++){
        if (res[i] === "#"){
            guess2 = i;
        }
        arrRes.push(res[i]);
    }
    //Generating possible result in array
    for(var i = 0; i < 10; i++){
        arrPosRes[i] = "";
        for(var j = 0; j < res.length; j++){
            if (j === guess2){
                arrPosRes[i] += i;
            }else{
                arrPosRes[i] += arrRes[j];
            }
        }
        arrPosRes[i] = Number(arrPosRes[i]);
    }
    //Testing possible numbers * multi = possible result
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            if(arrPosNum[i] * multi === arrPosRes[j]){
                result.push(Number(arrPosNum[i].toString()[guess1]));
                result.push(Number(arrPosRes[j].toString()[guess2]));
            }
        }
    }
    return result;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));