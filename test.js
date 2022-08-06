//filesystem
console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban benar ya');

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let newanswer = JSON.parse(rawdata);

let count = 0

var a = 'Pertanyaan: ' + newanswer[count]['definition'];
console.log(a)

//var b = newanswer[1]['definition'];
//console.log(b)


//readline
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan :'
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case line:

      if (line == newanswer[count]['term'] && count < newanswer.length-1) {
        console.log('Selamat Anda benar !');
        count++;
        rl.setPrompt("Pertanyaan: " + newanswer[count]['definition'])
        rl.prompt()
        break;
      } else if (line == newanswer[count]['term'] && count == newanswer.length-1) {
        console.log('Anda menang');
        rl.close()
        break;
      } else {
        console.log('Rungkad Wae')
        rl.prompt()
        break;
      }
  }
})