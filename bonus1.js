function spellingWord(word) {
    const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    var possibleRoute = []
    var tempWord = word
    var suku = 0
    var everPossible = false
    var sukuAkhir = 0
    while (sukuAkhir != dictionary.length){
        // console.log("sukuAkhir: " + sukuAkhir)
        tempWord = word
        var previousLength = 0
        suku = sukuAkhir
        while (suku < dictionary.length){
            // console.log("suku: " + dictionary[suku])
            // console.log("tempWord: " + tempWord.slice(previousLength))
            if (tempWord.slice(previousLength).startsWith(dictionary[suku])){
                possibleRoute.push(dictionary[suku])
                previousLength = possibleRoute.join("").length
                // console.log("possibleRoute: " + possibleRoute)
                suku = 0
                if (possibleRoute.join("") === word){
                    everPossible = true
                    console.log(possibleRoute.join(","))
                    possibleRoute = []
                    break
                }
            } else {
                if (possibleRoute.length === 0){
                    break
                }
                suku++
            }
        }
        possibleRoute = []
        sukuAkhir++
    }
    if (!everPossible){
        console.log("no way")
    }
}

spellingWord('program')
console.log()
spellingWord('programit')
console.log()
spellingWord('programmerit')
console.log()
spellingWord('programlala')
console.log()
spellingWord('proletarian')



