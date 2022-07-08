import { rl } from "../main.js";
import MahasiswaView from "../views/MahasiswaView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Mahasiswa } from "../models/Mahasiswa.js";

export default class MahasiswaController {
    static main(uni){

        var std = new Mahasiswa();

        function showMahasiswa(){
            console.log('===================================================================');
            uni.showMahasiswa();
            MahasiswaView.menu();
            menuOptions();
        }

        function cariMahasiswa(){
            rl.question('Masukan NIM: ', (answer) => {
                uni.describeMahasiswa(answer);
                MahasiswaView.menu();
                menuOptions();
            });
        }

        function tambahMahasiswa1(){
            console.log(`Lengkapi data di bawah ini: `);
            rl.question("NIM     : ", (answer) => {
                let nim = answer;
                tambahMahasiswa2(nim);
            });
        }

        function tambahMahasiswa2(nim){
            rl.question("Nama    : ", (answer) => {
                let nama = answer;
                tambahMahasiswa3(nim, nama);
            });
        }

        function tambahMahasiswa3(nim, nama){
            rl.question("Alamat  : ", (answer) => {
                let alamat = answer;
                tambahMahasiswa4(nim, nama, alamat);
            });
        }

        function tambahMahasiswa4(nim, nama, alamat){
            rl.question("Jurusan : ", (answer) => {
                let jurusan = answer;
                std.setNim(nim);
                std.setNama(nama);
                std.setAlamat(alamat);
                std.setJurusan(jurusan);
                uni.addMahasiswa(std);
                std = new Mahasiswa();
                console.log('===================================================================');
                uni.showMahasiswa();
                MahasiswaView.menu();
                menuOptions();
            });
        }

        function delMahasiswa(){
            rl.question("Masukkan NIM mahasiswa yang akan dihapus: ", (answer) => {
                uni.delMahasiswa(answer);
                MahasiswaView.menu();
                menuOptions();
            });
        }

        function menuOptions(){
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        showMahasiswa();
                        break;
                    case "2":
                        cariMahasiswa();
                        break;
        
                    case "3":
                        tambahMahasiswa1();
                        break;
                    case "4":
                        delMahasiswa();
                        break;
                    case "5":
                        MainMenuController.main(uni);
                        break;
                    default:
                        console.log(`Masukan invalid.`);
                        menuOptions();
                        break;
                }
            })
        }

        MahasiswaView.menu();
        menuOptions();
    }
}