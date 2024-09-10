function anagramCheck(s, p){
    var mapP = createMap(p)
    var cursor = 0
    var currentWord = ""
    var answer = []
    while (cursor < s.length-p.length){
        var mapS = new Map()
        currentWord = s.slice(cursor, cursor + p.length)
        // console.log(currentWord)
        mapS = createMap(currentWord)
        if(checkMap(mapS,mapP)){
            answer.push(cursor)
        }
        cursor++
    }
    console.log(answer)
}

function createMap(p){
    var letters = p.split("")
    // console.log(letters)
    let map = new Map()
    for (let i = 0; i< letters.length; i++){
        if (!map.get(letters[i])) {
            map.set(letters[i], 1)
        } else {
            map.set(letters[i], map.get(letters[i])+1)
        }
        // console.log(letters[i])
    }
    // console.log(map)
    return map
}

function checkMap(m1,m2){
    // console.log(m1, m2)
    for (let [key, value] of m1){
        if (!m2.has(key) || m2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

anagramCheck("cbaebabacd","abc")
anagramCheck("cbaebabacd","aba")
anagramCheck("cbaebabacd","babe")