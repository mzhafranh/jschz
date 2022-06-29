if (process.argv[2] === undefined){
    console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node solution.js data.json'");
}
else {
    const readline = require('readline');
    const rl = readline.createInterface({ input : process.stdin, output : process.stdout });
    const fs = require('fs');
    console.log(`Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini '${process.argv[2]}'.`);
    console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.');
    console.log(`Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n`);
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        var arrData = JSON.parse(data); //converts json to js object
        var falseAns = 0;
        rl.question("Pertanyaan: " + arrData[0].definition + "\nJawaban: ", (userInput) => {
            //Jika jawaban pertama benar
            if(userInput.trim() === arrData[0].term){
                console.log("Anda Beruntung\n");
                arrData.shift();
                if (arrData.length === 0) {
                    rl.close();
                    console.log("Anda Berhasil!");
                } else {
                    rl.setPrompt("Pertanyaan: " + arrData[0].definition + "\nJawaban: ");
                    rl.prompt();
                    falseAns = 0;
                }
            //Skip di pertanyaan pertama
            } else if(userInput.trim() === 'skip'){
                falseAns = 0;
                arrData.push(arrData.shift());
                rl.setPrompt("Pertanyaan: " + arrData[0].definition + "\nJawaban: ");
                rl.prompt();
            }
            else {
                //Salah di pertanyaan pertama
                falseAns++;
                rl.setPrompt(`\nAnda Kurang Beruntung!, anda telah salah ${falseAns} kali, silahkan coba lagi\nJawaban: `);
                rl.prompt();
            }
            //Loop
            rl.on('line', (userInput) => {
                if(userInput.trim() === arrData[0].term){
                    console.log("\nAnda beruntung!\n");
                    arrData.shift();
                    if (arrData.length === 0) {
                        rl.close()
                        console.log("Anda Berhasil!");
                    } else {
                        rl.setPrompt("Pertanyaan: " + arrData[0].definition + "\nJawaban: ");
                        rl.prompt();
                        falseAns = 0;
                    }
                }else if(userInput.trim() === 'skip'){
                    falseAns = 0;
                    arrData.push(arrData.shift());
                    rl.setPrompt("Pertanyaan: " + arrData[0].definition + "\nJawaban: ");
                    rl.prompt();
                }else {
                    falseAns++;
                    rl.setPrompt(`\nAnda Kurang Beruntung!, anda telah salah ${falseAns} kali, silahkan coba lagi\nJawaban: `);
                    rl.prompt();
                }
            })
        })
    })
}

