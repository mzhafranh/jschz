import MahasiswaController from "./MahasiswaController.js";
import { rl } from "../main.js"
import MainMenuView from "../views/MainMenuView.js";
import JurusanController from "./JurusanController.js";
import DosenController from "./DosenController.js";
import MatkulController from "./MatkulController.js";
import KontrakController from "./KontrakController.js";

export class MainMenuController{
    static main(uni){
        MainMenuView.menu();
        rl.question("Masukan salah satu no. dari opsi di atas: ", (answer) => {
            switch (answer) {
                case "1":
                    MahasiswaController.main(uni);
                    break;
                case "2":
                    JurusanController.main(uni);
                    break;
                case "3":
                    DosenController.main(uni);
                    break;
                case "4":
                    MatkulController.main(uni);
                    break;
                case "5":
                    KontrakController.main(uni);
                    break;
                case "6":
                    process.exit(1);
                default:
                    console.log("===================================================================")
                    console.log("Masukan tidak valid silahkan coba lagi.");
                    MainMenuController.main(uni);
            }
        })
    }
}