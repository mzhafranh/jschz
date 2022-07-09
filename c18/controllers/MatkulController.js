import { rl } from "../main.js";
import MatkulView from "../views/MatkulView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Matkul } from "../models/Matkul.js";
import Table from "cli-table";

export default class MatkulController {
    static main(uni) {

        function daftarMatkul() {
            Matkul.read(function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                const tableMatkul = new Table({
                    head: ['ID Matkul', 'Nama Matkul', 'SKS']
                    , colWidths: [20, 30, 10]
                });

                data.forEach(item => {
                    tableMatkul.push([item.id_matkul, item.nama_matkul, item.sks]);
                });

                console.log(tableMatkul.toString());
                MatkulView.menu();
                menuOptions();
            })
        }

        function cariMatkul() {
            rl.question('Masukan ID Matkul: ', (answer) => {
                Matkul.search(answer, (err, data) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    }
                    if (data.length === 0){
                        console.log(`Matkul dengan ID ${answer} tidak ditemukan`);
                        MatkulView.menu();
                        menuOptions();
                    } else {
                        console.log(`
Hasil pencarian matkul dengan id matkul '${id}':
ID Matkul      : ${data[0].id_matkul}
Nama Matkul    : ${data[0].nama_matkul}
SKS		       : ${data[0].sks}
                        `);
                        MatkulView.menu();
                        menuOptions();
                    }
                })
            });
        }

        function hapusMatkul(){
            rl.question('Masukkan ID Matkul: ', (answer) => {
                Matkul.remove(answer, (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    } else {
                        console.log(`Matkul dengan ID: ${answer} telah dihapus`);
                        daftarMatkul();
                    }
                })
            })
        }

        function tambahMatkul() {
            rl.question('Masukkan ID Matkul: ', (id) => {
                rl.question('Masukkan Nama Matkul: ', (nama) => {
                    rl.question('Masukkan SKS Matkul: ', (sks) => {
                        Matkul.add(id, nama, sks, (err) => {
                            if(err) {
                                console.error(err);
                                tambahMatkul();
                            } else {
                                console.log('Matkul telah ditambahkan');
                                daftarMatkul();
                            }
                        })
                    })
                })
            })
        }


        function menuOptions() {
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        daftarMatkul();
                        break;
                    case "2":
                        cariMatkul();
                        break;
                    case "3":
                        tambahMatkul();
                        break;
                    case "4":
                        hapusMatkul();
                        break;
                    case "5":
                        MainMenuController.main();
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