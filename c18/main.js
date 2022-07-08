import { University } from "./models/University.js";
import * as readline from 'node:readline';
import { MainMenuController } from "./controllers/MainMenuController.js";

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

var uni = new University();
function welcome(){
console.log(`===================================================================
            Welcome to Universitas Rubicamp Indonesia
                    Jl. Margahayu Raya No. 120
===================================================================`);
}

function askUsername() {
    rl.question("Username: ", (answer) => {
        let user = answer;
        askPassword(user);
    });
}

function askPassword(user) {
    rl.question("Password: ", (answer) => {
        let pass = answer;
    if (user === "meng" && pass === "123"){
        console.log(`Welcome ${user}, your access level is: ADMIN`);
        MainMenuController.main(uni);
    } else {
        console.log(`Username atau Password salah, silahkan coba lagi.`);
        askUsername();
    }
    })
}

welcome();
askUsername();