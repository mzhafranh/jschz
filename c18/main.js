import readline from 'readline';
import { MainMenuController } from "./controllers/MainMenuController.js";
import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database("kuliah.db", sqlite3.OPEN_READWRITE, err => {
    if (err){
        console.err(err);
    }
}) 

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

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
        MainMenuController.main();
    } else {
        console.log(`Username atau Password salah, silahkan coba lagi.`);
        askUsername();
    }
    })
}

welcome();
askUsername();