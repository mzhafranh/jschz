import { rl } from "../main.js";
import JurusanView from "../views/JurusanView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Jurusan } from "../models/Jurusan.js";
import Table from "cli-table";

export default class JurusanController {
    static main(uni) {

        function daftarJurusan() {
            Jurusan.read(function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                const tableJurusan = new Table({
                    head: ['ID Jurusan', 'Nama Jurusan']
                    , colWidths: [20, 30]
                });

                data.forEach(item => {
                    tableJurusan.push([item.id_jurusan, item.nama_jurusan]);
                });

                console.log(tableJurusan.toString());
                JurusanView.menu();
                menuOptions();
            })
        }

        function cariJurusan() {
            rl.question('Masukan ID Jurusan: ', (answer) => {
                Jurusan.search(answer, (err, data) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    }
                    if (data.length === 0){
                        console.log(`Jurusan dengan ID ${answer} tidak ditemukan`);
                        JurusanView.menu();
                        menuOptions();
                    } else {
                        console.log(`
Hasil pencarian jurusan dengan id jurusan '${id}':
ID Jurusan      : ${data[0].id_jurusan}
Nama Jurusan    : ${data[0].nama_jurusan}
                        `);
                        JurusanView.menu();
                        menuOptions();
                    }
                })
            });
        }

        function hapusJurusan(){
            rl.question('Masukkan Kode Jurusan: ', (answer) => {
                Jurusan.remove(answer, (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    } else {
                        console.log(`Jurusan dengan ID: ${answer} telah dihapus`);
                        daftarJurusan();
                    }
                })
            })
        }

        function tambahJurusan() {
            rl.question('Masukkan ID Jurusan: ', (id) => {
                rl.question('Masukkan Nama Jurusan: ', (nama) => {
                    Jurusan.add(id, nama, (err) => {
                        if(err) {
                            console.error(err);
                            tambahJurusan();
                        } else {
                            console.log('Jurusan telah ditambahkan');
                            daftarJurusan();
                        }
                    })
                })
            })
        }


        function menuOptions() {
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        daftarJurusan();
                        break;
                    case "2":
                        cariJurusan();
                        break;
                    case "3":
                        tambahJurusan();
                        break;
                    case "4":
                        hapusJurusan();
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