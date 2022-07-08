import { rl } from "../main.js";
import MatkulView from "../views/MatkulView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Matkul } from "../models/Matkul.js";

export default class MatkulController {
    static main(uni){

        var mtkl = new Matkul();

        function showMatkul(){
            console.log('===================================================================');
            uni.showMatkul();
            MatkulView.menu();
            menuOptions();
        }

        function cariMatkul(){
            rl.question('Masukan ID: ', (answer) => {
                uni.describeMatkul(answer);
                MatkulView.menu();
                menuOptions();
            });
        }

        function tambahMatkul1(){
            console.log(`Lengkapi data di bawah ini: `);
            rl.question("ID     : ", (answer) => {
                let id = answer;
                tambahMatkul2(id);
            });
        }

        function tambahMatkul2(id){
            rl.question("Nama   : ", (answer) => {
                let nama = answer;
                mtkl.setId(id);
                mtkl.setNama(nama);
                uni.addMatkul(mtkl);
                mtkl = new Matkul();
                console.log('===================================================================');
                uni.showMatkul();
                MatkulView.menu();
                menuOptions();
            });
        }

        function delMatkul(){
            rl.question("Masukkan ID mata kuliah yang akan dihapus: ", (answer) => {
                uni.delMatkul(answer);
                MatkulView.menu();
                menuOptions();
            });
        }

        function menuOptions(){
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        showMatkul();
                        break;
                    case "2":
                        cariMatkul();
                        break;
                    case "3":
                        tambahMatkul1();
                        break;
                    case "4":
                        delMatkul();
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

        MatkulView.menu();
        menuOptions();

    }

}