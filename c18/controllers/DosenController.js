import { rl } from "../main.js";
import DosenView from "../views/DosenView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Dosen } from "../models/Dosen.js";
import Table from "cli-table";

export default class DosenController {
    static main(uni) {

        function daftarDosen() {
            Dosen.read(function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                const tableDosen = new Table({
                    head: ['NIP Dosen', 'Nama Dosen', 'Jenis Kelamin', 'Gaji']
                    , colWidths: [25, 30, 15, 20]
                });

                data.forEach(item => {
                    tableDosen.push([item.nip, item.nama_dosen, item.jenis_kelamin, item.gaji]);
                });

                console.log(tableDosen.toString());
                DosenView.menu();
                menuOptions();
            })
        }

        function cariDosen() {
            rl.question('Masukan NIP Dosen: ', (nip) => {
                Dosen.search(nip, (err, data) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    }
                    if (data.length === 0){
                        console.log(`Dosen dengan NIP ${nip} tidak ditemukan`);
                        DosenView.menu();
                        menuOptions();
                    } else {
                        console.log(`
Hasil pencarian dosen dengan NIP dosen '${nip}':
NIP Dosen     : ${data[0].nip}
Nama Dosen    : ${data[0].nama_dosen}
Jenis Kelamin : ${data[0].jenis_kelamin}
Gaji          : ${data[0].gaji}
                        `);
                        DosenView.menu();
                        menuOptions();
                    }
                })
            });
        }

        function hapusDosen(){
            rl.question('Masukkan NIP Dosen: ', (nip) => {
                Dosen.remove(nip, (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    } else {
                        console.log(`Dosen dengan NIP: ${nip} telah dihapus`);
                        daftarDosen();
                    }
                })
            })
        }

        function tambahDosen() {
            rl.question('Masukkan NIP Dosen: ', (nip) => {
                rl.question('Masukkan Nama Dosen: ', (nama) => {
                    rl.question('Masukkan Jenis Kelamin Dosen: ', (jenis_kelamin) => {
                        rl.question('Masukkan Gaji Dosen: ', (gaji) => {
                            Dosen.add(nip, nama, jenis_kelamin, gaji, (err) => {
                                if(err) {
                                    console.error(err);
                                    tambahDosen();
                                } else {
                                    console.log('Dosen telah ditambahkan');
                                    daftarDosen();
                                }
                            })
                        })
                    })
                })
            })
        }


        function menuOptions() {
            rl.question('Masukan salah satu no. dari opsi di atas: ', (answer) => {
                switch (answer) {
                    case "1":
                        daftarDosen();
                        break;
                    case "2":
                        cariDosen();
                        break;
                    case "3":
                        tambahDosen();
                        break;
                    case "4":
                        hapusDosen();
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

        DosenView.menu();
        menuOptions();

    }

}