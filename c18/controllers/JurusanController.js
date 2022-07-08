import { rl } from "../main.js";
import JurusanView from "../views/JurusanView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Jurusan } from "../models/Jurusan.js";

export default class JurusanController {
    static main(uni){

        var jsn = new Jurusan();

        function showJurusan(){
            console.log('===================================================================');
            uni.showJurusan();
            JurusanView.menu();
            menuOptions();
        }

        function cariJurusan(){
            rl.question('Masukan ID: ', (answer) => {
                uni.describeJurusan(answer);
                JurusanView.menu();
                menuOptions();
            });
        }

        function tambahJurusan1(){
            console.log(`Lengkapi data di bawah ini: `);
            rl.question("ID     : ", (answer) => {
                let id = answer;
                tambahJurusan2(id);
            });
        }

        function tambahJurusan2(id){
            rl.question("Nama   : ", (answer) => {
                let nama = answer;
                jsn.setId(id);
                jsn.setNama(nama);
                uni.addJurusan(jsn);
                jsn = new Jurusan();
                console.log('===================================================================');
                uni.showJurusan();
                JurusanView.menu();
                menuOptions();
            });
        }

        function delJurusan(){
            rl.question("Masukkan ID jurusan yang akan dihapus: ", (answer) => {
                uni.delJurusan(answer);
                JurusanView.menu();
                menuOptions();
            });
        }

        function menuOptions(){
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        showJurusan();
                        break;
                    case "2":
                        cariJurusan();
                        break;
                    case "3":
                        tambahJurusan1();
                        break;
                    case "4":
                        delJurusan();
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

        JurusanView.menu();
        menuOptions();

    }

}