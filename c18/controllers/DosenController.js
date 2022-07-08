import { rl } from "../main.js";
import DosenView from "../views/DosenView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Dosen } from "../models/Dosen.js";

export default class DosenController {
    static main(uni){

        var dsn = new Dosen();

        function showDosen(){
            console.log('===================================================================');
            uni.showDosen();
            DosenView.menu();
            menuOptions();
        }

        function cariDosen(){
            rl.question('Masukan ID: ', (answer) => {
                uni.describeDosen(answer);
                DosenView.menu();
                menuOptions();
            });
        }

        function tambahDosen1(){
            console.log(`Lengkapi data di bawah ini: `);
            rl.question("ID     : ", (answer) => {
                let id = answer;
                tambahDosen2(id);
            });
        }

        function tambahDosen2(id){
            rl.question("Nama   : ", (answer) => {
                let nama = answer;
                dsn.setId(id);
                dsn.setNama(nama);
                uni.addDosen(dsn);
                dsn = new Dosen();
                console.log('===================================================================');
                uni.showDosen();
                DosenView.menu();
                menuOptions();
            });
        }

        function delDosen(){
            rl.question("Masukkan ID dosen yang akan dihapus: ", (answer) => {
                uni.delDosen(answer);
                DosenView.menu();
                menuOptions();
            });
        }

        function menuOptions(){
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        showDosen();
                        break;
                    case "2":
                        cariDosen();
                        break;
                    case "3":
                        tambahDosen1();
                        break;
                    case "4":
                        delDosen();
                        break;
                    case "5":
                        MainMenuController.main(uni);
                        break;
                    default:
                        console.log(`Masukan invalid.`);
                        menuOptions();
                        break;
                }
            });
        }

        DosenView.menu();
        menuOptions();

    }

}