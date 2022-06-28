function romawi(n){
    var roman = "";
    var dig1, dig2, dig3, dig4;
    dig4 = n % 10;
    dig3 = n % 100 - dig4;
    dig2 = n % 1000 - dig3 - dig4;
    dig1 = n % 10000 - dig2 - dig3 - dig4;
    if (dig1>0){
        switch (dig1){
            case 1000:
                roman += "M";
                break;
            case 2000:
                roman += "MM";
                break;
            case 3000:
                roman += "MMM";
                break;
        }
    }
    if (dig2>0){
        switch (dig2){
            case 100:
                roman += "C";
                break;
            case 200:
                roman += "CC";
                break;
            case 300:
                roman += "CCC";
                break;
            case 400:
                roman += "CD";
                break;
            case 500:
                roman += "D";
                break;
            case 600:
                roman += "DC";
                break;
            case 700:
                roman += "DCC";
                break;
            case 800:
                roman += "DCCC";
                break;
            case 900:
                roman += "CM";
                break;
        }
    }
    if (dig3>0){
        switch (dig3){
            case 10:
                roman += "X";
                break;
            case 20:
                roman += "XX";
                break;
            case 30:
                roman += "XXX";
                break;
            case 40:
                roman += "XL";
                break;
            case 50:
                roman += "L";
                break;
            case 60:
                roman += "LX";
                break;
            case 70:
                roman += "LXX";
                break;
            case 80:
                roman += "LXXX";
                break;
            case 90:
                roman += "XC";
                break;
        }
    }
    if (dig4>0){
        switch (dig4){
            case 1:
                roman += "I";
                break;
            case 2:
                roman += "II";
                break;
            case 3:
                roman += "III";
                break;
            case 4:
                roman += "IV";
                break;
            case 5:
                roman += "V";
                break;
            case 6:
                roman += "VI";
                break;
            case 7:
                roman += "VII";
                break;
            case 8:
                roman += "VIII";
                break;
            case 9:
                roman += "IX";
                break;
        }
    }
    return roman;

}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------")
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
