function spiral(param1){

    var arrNum = [];
    var temp = [];
    var spiral = [];
    var num = 0;
    //Generating matrix param1 * param1
    for (var i = 0; i < param1; i++){
        for (var j = 0; j < param1; j++){
            temp.push(num);
            num++;
        }
        arrNum.push(temp);
        temp = [];
    }
    for (var i = 0; i < param1; i++){
        spiral.push(arrNum[0][i]);
    }
    var verUp = 1;
    var verDown = param1-1;
    var horRight = param1-1;
    var horLeft = 0;
    while(verUp !== verDown  && horRight !== horLeft){
        for (var i = verUp; i <= verDown; i++){
            spiral.push(arrNum[i][horRight]);
        }
        horRight--;
        for (var i = horRight; i >= horLeft; i--){
            spiral.push(arrNum[verDown][i]);
        }
        verDown--;
        for (var i = verDown; i >= verUp; i--){
            spiral.push(arrNum[i][horLeft]);
        }
        horLeft++;
        for (var i = horLeft; i <= horRight; i++){
            spiral.push(arrNum[verUp][i]);
        }
        verUp++;
    }
    console.log(spiral);

}

function spiralx(num){
    const matriks  = []
    let counter = 0
    for (let i = 0; i < size; i++) {
        matriks[i] = [];
        for (let j = 0; j < size; j++) {
            matriks[i][j] = counter++
        }
    }
    

}

spiral(5);
spiral(6);
spiral(7);