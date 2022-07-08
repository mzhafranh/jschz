import { rl } from "../main.js";
import KontrakView from "../views/KontrakView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Kontrak } from "../models/Kontrak.js";

export default class KontrakController {
    static main(uni){

        var knt = new Kontrak();

        function showKontrak(){
            console.log('===================================================================');
            uni.showKontrak();
            KontrakView.menu();
            menuOptions();
        }

        function cariKontrak(){
            rl.question('Masukan ID: ', (answer) => {
                uni.describeKontrak(answer);
                KontrakView.menu();
                menuOptions();
            });
        }

        function tambahKontrak1(){
            console.log(`Lengkapi data di bawah ini: `);
            rl.question("ID     : ", (answer) => {
                let id = answer;
                tambahKontrak2(id);
            });
        }

        function tambahKontrak2(id){
            rl.question("NIM    : ", (answer) => {
                let nim = answer;
                tambahKontrak3(id, nim);
            });
        }

        function tambahKontrak3(id, nim){
            rl.question("Matkul : ", (answer) => {
                let mtkl = answer;
                knt.setId(id);
                knt.setNim(nim);
                knt.setMatkul(mtkl);
                uni.addKontrak(knt);
                knt = new Kontrak();
                console.log('===================================================================');
                uni.showKontrak();
                KontrakView.menu();
                menuOptions();
            })
        }

        function delKontrak(){
            rl.question("Masukkan ID mata kuliah yang akan dihapus: ", (answer) => {
                uni.delKontrak(answer);
                KontrakView.menu();
                menuOptions();
            });
        }

        function menuOptions(){
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        showKontrak();
                        break;
                    case "2":
                        cariKontrak();
                        break;
                    case "3":
                        tambahKontrak1();
                        break;
                    case "4":
                        delKontrak();
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

        KontrakView.menu();
        menuOptions();

    }

}