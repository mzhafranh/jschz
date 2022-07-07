import { University } from "./University.js";
import * as readline from 'node:readline';
import { Mahasiswa } from "./Mahasiswa.js";
import { Jurusan } from "./Jurusan.js";
import { Dosen } from "./Dosen.js";
import { Matkul } from "./Matkul.js";
import { Kontrak } from "./Kontrak.js";

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

//Menu Options
var menu = "setUsername";
var currentOption = 0;

//Menu Mahasiswa
var std = new Mahasiswa();
var currSearchingProcessMahasiswa = "inputNim";
var currAddingProcessMahasiswa = "addMahasiswa";
var currDeleteProcessMahasiswa = "inputNim";

//Menu Jurusan
var jsn = new Jurusan();
var currSearchingProcessJurusan = "inputId";
var currAddingProcessJurusan = "addJurusan";
var currDeleteProcessJurusan = "inputId";

//Menu Dosen
var dsn = new Dosen();
var currSearchingProcessDosen = "inputId";
var currAddingProcessDosen = "addDosen";
var currDeleteProcessDosen = "inputId";

//Menu Matkul
var mtkl = new Matkul();
var currSearchingProcessMatkul = "inputId";
var currAddingProcessMatkul = "addMatkul";
var currDeleteProcessMatkul = "inputId";

//Menu Kontrak
var knt = new Kontrak();
var currSearchingProcessKontrak = "inputId";
var currAddingProcessKontrak = "addKontrak";
var currDeleteProcessKontrak = "inputId";

//Main Program
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
                menu = "menuJurusan";
                currentOption = 0;
                rl.prompt();
                break;
            case "3":
                printMenuDosen();
                menu = "menuDosen";
                currentOption = 0;
                rl.prompt();
                break;
            case "4":
                printMenuMatkul();
                menu = "menuMatkul";
                currentOption = 0;
                rl.prompt();
                break;
            case "5":
                printMenuKontrak();
                menu = "menuKontrak";
                currentOption = 0;
                rl.prompt();
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
                if (currSearchingProcessMahasiswa === "inputNim") {
                    currSearchingProcessMahasiswa = "printMahasiswa";
                    rl.setPrompt("Masukkan NIM: ");
                    rl.prompt();
                }
                else if (currSearchingProcessMahasiswa === "printMahasiswa") {
                    uni.describeMahasiswa(answer);
                    currSearchingProcessMahasiswa = "inputNim";
                    currentOption = 0;
                    printMenuMahasiswa();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcessMahasiswa === "addMahasiswa") {
                    currAddingProcessMahasiswa = "setNim";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("NIM     : ")
                    rl.prompt();
                }
                else if (currAddingProcessMahasiswa === "setNim") {
                    std.setNim(answer);
                    currAddingProcessMahasiswa = "setNama";
                    rl.setPrompt("Nama    : ");
                    rl.prompt();
                }
                else if (currAddingProcessMahasiswa === "setNama") {
                    std.setNama(answer);
                    currAddingProcessMahasiswa = "setAlamat";
                    rl.setPrompt("Alamat  : ");
                    rl.prompt();
                }
                else if (currAddingProcessMahasiswa === "setAlamat") {
                    std.setAlamat(answer);
                    currAddingProcessMahasiswa = "setJurusan";
                    rl.setPrompt("Jurusan : ");
                    rl.prompt();
                }
                else if (currAddingProcessMahasiswa === "setJurusan") {
                    std.setJurusan(answer);
                    currAddingProcessMahasiswa = "addMahasiswa";
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
                if (currDeleteProcessMahasiswa === "inputNim") {
                    currDeleteProcessMahasiswa = "delMahasiswa"
                    rl.setPrompt(`Masukkan NIM mahasiswa yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcessMahasiswa === "delMahasiswa") {
                    uni.delMahasiswa(answer);
                    currDeleteProcessMahasiswa = "inputNim";
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
    } else if (menu === "menuJurusan") {
        if (currentOption === 0) {
            currentOption = answer;
        }
        switch (currentOption) {
            case "1":
                console.log('===================================================================');
                uni.showJurusan();
                printMenuJurusan();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case "2":
                if (currSearchingProcessJurusan === "inputId") {
                    currSearchingProcessJurusan = "printJurusan";
                    rl.setPrompt("Masukkan ID: ");
                    rl.prompt();
                }
                else if (currSearchingProcessJurusan === "printJurusan") {
                    uni.describeJurusan(answer);
                    currSearchingProcessJurusan = "inputId";
                    currentOption = 0;
                    printMenuJurusan();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcessJurusan === "addJurusan") {
                    currAddingProcessJurusan = "setId";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("ID     : ")
                    rl.prompt();
                }
                else if (currAddingProcessJurusan === "setId") {
                    jsn.setId(answer);
                    currAddingProcessJurusan = "setNama";
                    rl.setPrompt("Nama    : ");
                    rl.prompt();
                }
                else if (currAddingProcessJurusan === "setNama") {
                    jsn.setNama(answer);
                    currAddingProcessJurusan = "addJurusan";
                    console.log('===================================================================');
                    uni.addJurusan(jsn);
                    jsn = new Jurusan();
                    uni.showJurusan();
                    printMenuJurusan();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "4":
                if (currDeleteProcessJurusan === "inputId") {
                    currDeleteProcessJurusan = "delJurusan"
                    rl.setPrompt(`Masukkan ID jurusan yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcessJurusan === "delJurusan") {
                    uni.delJurusan(answer);
                    currDeleteProcessJurusan = "inputId";
                    printMenuJurusan();
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
    } else if (menu === "menuDosen") {
        if (currentOption === 0) {
            currentOption = answer;
        }
        switch (currentOption) {
            case "1":
                console.log('===================================================================');
                uni.showDosen();
                printMenuDosen();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case "2":
                if (currSearchingProcessDosen === "inputId") {
                    currSearchingProcessDosen = "printDosen";
                    rl.setPrompt("Masukkan ID: ");
                    rl.prompt();
                }
                else if (currSearchingProcessDosen === "printDosen") {
                    uni.describeDosen(answer);
                    currSearchingProcessDosen = "inputId";
                    currentOption = 0;
                    printMenuDosen();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcessDosen === "addDosen") {
                    currAddingProcessDosen = "setId";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("ID     : ")
                    rl.prompt();
                }
                else if (currAddingProcessDosen === "setId") {
                    dsn.setId(answer);
                    currAddingProcessDosen = "setNama";
                    rl.setPrompt("Nama    : ");
                    rl.prompt();
                }
                else if (currAddingProcessDosen === "setNama") {
                    dsn.setNama(answer);
                    currAddingProcessDosen = "addDosen";
                    console.log('===================================================================');
                    uni.addDosen(dsn);
                    dsn = new Dosen();
                    uni.showDosen();
                    printMenuDosen();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "4":
                if (currDeleteProcessDosen === "inputId") {
                    currDeleteProcessDosen = "delDosen"
                    rl.setPrompt(`Masukkan ID dosen yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcessDosen === "delDosen") {
                    uni.delDosen(answer);
                    currDeleteProcessDosen = "inputId";
                    printMenuDosen();
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
    } else if (menu === "menuMatkul") {
        if (currentOption === 0) {
            currentOption = answer;
        }
        switch (currentOption) {
            case "1":
                console.log('===================================================================');
                uni.showMatkul();
                printMenuMatkul();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case "2":
                if (currSearchingProcessMatkul === "inputId") {
                    currSearchingProcessMatkul = "printMatkul";
                    rl.setPrompt("Masukkan ID: ");
                    rl.prompt();
                }
                else if (currSearchingProcessMatkul === "printMatkul") {
                    uni.describeMatkul(answer);
                    currSearchingProcessMatkul = "inputId";
                    currentOption = 0;
                    printMenuMatkul();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcessMatkul === "addMatkul") {
                    currAddingProcessMatkul = "setId";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("ID     : ")
                    rl.prompt();
                }
                else if (currAddingProcessMatkul === "setId") {
                    mtkl.setId(answer);
                    currAddingProcessMatkul = "setNama";
                    rl.setPrompt("Nama    : ");
                    rl.prompt();
                }
                else if (currAddingProcessMatkul === "setNama") {
                    mtkl.setNama(answer);
                    currAddingProcessMatkul = "addMatkul";
                    console.log('===================================================================');
                    uni.addMatkul(mtkl);
                    mtkl = new Matkul();
                    uni.showMatkul();
                    printMenuMatkul();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "4":
                if (currDeleteProcessMatkul === "inputId") {
                    currDeleteProcessMatkul = "delMatkul"
                    rl.setPrompt(`Masukkan ID matkul yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcessMatkul === "delMatkul") {
                    uni.delMatkul(answer);
                    currDeleteProcessMatkul = "inputId";
                    printMenuMatkul();
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
    } else if (menu === "menuKontrak") {
        if (currentOption === 0) {
            currentOption = answer;
        }
        switch (currentOption) {
            case "1":
                console.log('===================================================================');
                uni.showKontrak();
                printMenuKontrak();
                currentOption = 0;
                rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                rl.prompt();
                break;
            case "2":
                if (currSearchingProcessKontrak === "inputId") {
                    currSearchingProcessKontrak = "printKontrak";
                    rl.setPrompt("Masukkan ID: ");
                    rl.prompt();
                }
                else if (currSearchingProcessKontrak === "printKontrak") {
                    uni.describeKontrak(answer);
                    currSearchingProcessKontrak = "inputId";
                    currentOption = 0;
                    printMenuKontrak();
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;

            case "3":
                if (currAddingProcessKontrak === "addKontrak") {
                    currAddingProcessKontrak = "setId";
                    console.log("Lengkapi data di bawah ini:")
                    rl.setPrompt("ID     : ")
                    rl.prompt();
                }
                else if (currAddingProcessKontrak === "setId") {
                    knt.setId(answer);
                    currAddingProcessKontrak = "setNim";
                    rl.setPrompt("NIM    : ");
                    rl.prompt();
                }
                else if (currAddingProcessKontrak === "setNim") {
                    knt.setNim(answer);
                    currAddingProcessKontrak = "setMatkul";
                    rl.setPrompt("Matkul : ");
                    rl.prompt();
                }
                else if (currAddingProcessKontrak === "setMatkul") {
                    knt.setMatkul(answer);
                    currAddingProcessKontrak = "addKontrak";
                    console.log('===================================================================');
                    uni.addKontrak(knt);
                    knt = new Kontrak();
                    uni.showKontrak();
                    printMenuKontrak();
                    currentOption = 0;
                    rl.setPrompt(`Masukan salah satu no. dari opsi di atas: `);
                    rl.prompt();
                }
                break;
            case "4":
                if (currDeleteProcessKontrak === "inputId") {
                    currDeleteProcessKontrak = "delKontrak"
                    rl.setPrompt(`Masukkan ID kontrak yang akan dihapus: `);
                    rl.prompt();
                } else if (currDeleteProcessKontrak === "delKontrak") {
                    uni.delKontrak(answer);
                    currDeleteProcessKontrak = "inputId";
                    printMenuKontrak();
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
