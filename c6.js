function sentenceManipulation(sentence){
    var arrString = sentence.split(" ");
    var word = "";
    for(let i = 0; i < arrString.length; i++){
        word = arrString.shift();
        if(word.startsWith("a") || word.startsWith("i") || word.startsWith("u") || word.startsWith("e") || word.startsWith("o")){
            arrString.push(word);
        }
        else{
            word = word.slice(1, word.length) + word.slice(0, 1) + "nyo";
            arrString.push(word);
        }
    }
    var newSentence = "";
    for(let i = 0; i < arrString.length-1; i++){
        newSentence += arrString[i];
        newSentence += " ";
    }
    newSentence += arrString[arrString.length-1];
    console.log(newSentence);
}

sentenceManipulation('ibu pergi ke pasar bersama aku');