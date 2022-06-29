const readline = require('readline');
const rl = readline.createInterface({ input : process.stdin, output : process.stdout });
const fs = require('fs');
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n')
fs.readFile('data.json', 'utf8', (err, data) => {
    var arrData = JSON.parse(data); //converts json to js object
    var i = 0;
    rl.question("Pertanyaan: " + arrData[i].definition + "\nTebakan: ", (userInput) => {
        if(userInput.trim() === arrData[i].term){
            console.log("Selamat Anda Benar!\n");
            i++;
            if (i >= arrData.length) {
                rl.close()
                console.log("Hore Anda Menang!\n");
            } else {
                rl.setPrompt("Pertanyaan: " + arrData[i].definition + "\nTebakan: ");
                rl.prompt();
            }
        }
        else {
            rl.setPrompt("Wkwkwkwk, Anda kurang beruntung! \nTebakan: ")
            rl.prompt();
            rl.on('line', (userInput) => {
                if(userInput.trim() === arrData[i].term){
                    console.log("Selamat Anda Benar!\n");
                    i++;
                    if (i >= arrData.length) {
                        rl.close()
                        console.log("Hore Anda Menang!\n");
                    } else {
                        rl.setPrompt("Pertanyaan: " + arrData[i].definition + "\nTebakan: ");
                        rl.prompt();
                    }
                }
                else {
                    rl.prompt()
                }
            })
        }
    })
})