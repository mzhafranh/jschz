function stringManipulation(word){
    if(word.startsWith("a") || word.startsWith("i") || word.startsWith("u") || word.startsWith("e") || word.startsWith("o")){
        console.log(word);
    }
    else{
        word = word.slice(1, word.length) + word.slice(0, 1) + "nyo";
        console.log(word);
    }
}

stringManipulation('ayam');
stringManipulation('bebek');
