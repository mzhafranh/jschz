import { University } from "./University.js";
import * as readline from 'node:readline';
import { Mahasiswa } from "./Mahasiswa.js";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

var uni = new University();
console.log(`===================================================================
            Welcome to Universitas Rubicamp Indonesia
                    Jl. Margahayu Raya No. 120
===================================================================`);

function printMainMenu() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
===================================================================`);
}

function printMenuMahasiswa() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Daftar mahasiswa
[2] Cari mahasiswa
[3] Tambah mahasiswa
[4] Hapus mahasiswa
[5] Kembali
===================================================================`);

}

function printMenuJurusan() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Daftar jurusan
[2] Cari jurusan
[3] Tambah jurusan
[4] Hapus jurusan
[5] Kembali
===================================================================`);

}

function printMenuDosen() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Daftar dosen
[2] Cari dosen
[3] Tambah dosen
[4] Hapus dosen
[5] Kembali
===================================================================`);
}


function printMenuMatkul() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Daftar mata kuliah
[2] Cari mata kuliah
[3] Tambah mata kuliah
[4] Hapus mata kuliah
[5] Kembali
===================================================================`);
}

function printMenuKontrak() {
    console.log(
        `===================================================================
Silahkan pilih opsi di bawah ini
[1] Daftar kontrak
[2] Cari kontrak
[3] Tambah kontrak
[4] Hapus kontrak
[5] Kembali
===================================================================`);

}




rl.setPrompt("Username: ");
rl.prompt();
//Login Purposes
var user = "";
var pass = "";
// var setUsername = true;
// var setPassword = false;
var login = true;

//Menu Options
var menu = "setUsername";

//Menu Mahasiswa
var std = new Mahasiswa();
var currentOption = 0;
var currSearchingProcess = "inputNim";
var currAddingProcess = "addMahasiswa";
var currDeleteProcess = "inputNim";



rl.on('line', (answer) => {
    if (menu === "setUsername") {
        user = answer;
        menu = "setPassword";
        rl.setPrompt("Password: ");
        rl.prompt();
    } else if (menu === "setPassword") {
        pass = answer;
        if (user === "meng" && pass === "123") {
            menu = "mainMenu"
            console.log(`Welcome ${user}, your access level is: ADMIN`);
            printMainMenu();
            rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
            rl.prompt();
        } else {
            menu = "setUsername";
            rl.setPrompt(`Username atau Password salah, silahkan coba lagi.
Username: `);
            rl.prompt();
        }
    } else if (menu === "mainMenu") {
        switch (answer) {
            case "1":
                printMenuMahasiswa();
                menu = "menuMahasiswa";
                currentOption = 0;
                rl.prompt();
                break;
            case "2":
                printMenuJurusan();

                break;
            case "3":
                printMenuDosen();

                break;
            case "4":
                printMenuMatkul();

                break;
            case "5":
                printMenuKontrak();

                break;
            case "6":
                rl.close();
                break;
            default:
                console.log("===================================================================")
                console.log("Masukan tidak valid silahkan coba lagi.");
                printMainMenu();
                rl.prompt();

        }
    } else if (menu === "menuMahasiswa") {
        if (currentOption === 0) {
            currentOption = answer;
        }
        switch (currentOption) {
            case "1":
                console.log('===================================================================');
                uni.showMahasiswa();
                printMenuMahasiswa();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case "2":
                if (currSearchingProcess === "inputNim") {
                    currSearchingProcess = "printMahasiswa";
                    rl.setPrompt("Masukkan NIM: ");
                    rl.prompt();
                }
                else if (currSearchingProcess === "printMahasiswa") {
                    uni.describeMahasiswa(answer);
                    currSearchingProcess = "inputNim";
                    currentOption = 0;
                    printMenuMahasiswa();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcess === "addMahasiswa") {
                    currAddingProcess = "setNim";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("NIM     : ")
                    rl.prompt();
                }
                else if (currAddingProcess === "setNim") {
                    std.setNim(answer);
                    currAddingProcess = "setNama";
                    rl.setPrompt("Nama    : ");
                    rl.prompt();
                }
                else if (currAddingProcess === "setNama") {
                    std.setNama(answer);
                    currAddingProcess = "setAlamat";
                    rl.setPrompt("Alamat  : ");
                    rl.prompt();
                }
                else if (currAddingProcess === "setAlamat") {
                    std.setAlamat(answer);
                    currAddingProcess = "setJurusan";
                    rl.setPrompt("Jurusan : ");
                    rl.prompt();
                }
                else if (currAddingProcess === "setJurusan") {
                    std.setJurusan(answer);
                    currAddingProcess = "addMahasiswa";
                    console.log('===================================================================');
                    uni.addMahasiswa(std);
                    std = new Mahasiswa();
                    uni.showMahasiswa();
                    printMenuMahasiswa();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "4":
                if (currDeleteProcess === "inputNim") {
                    currDeleteProcess = "delMahasiswa"
                    rl.setPrompt(`Masukkan NIM mahasiswa yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcess === "delMahasiswa") {
                    uni.delMahasiswa(answer);
                    currDeleteProcess = "inputNim";
                    printMenuMahasiswa();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "5":
                menu = "mainMenu";
                printMainMenu();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case 0:
                currentOption = answer;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
        }
    }
})



