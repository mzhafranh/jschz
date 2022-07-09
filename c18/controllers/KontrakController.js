import { rl } from "../main.js";
import KontrakView from "../views/KontrakView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Kontrak } from "../models/Kontrak.js";
import Table from "cli-table";

export default class KontrakController {
    static main(uni) {

        function daftarKontrak() {
            Kontrak.read(function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                const tableKontrak = new Table({
                    head: ['NIM Mahasiswa', 'ID Mata Kuliah', 'Indeks', 'Tahun']
                    , colWidths: [15, 20, 10, 20]
                });

                data.forEach(item => {
                    tableKontrak.push([item.nim, item.id_matkul, item.indeks, item.tahun_ajaran]);
                });

                console.log(tableKontrak.toString());
                KontrakView.menu();
                menuOptions();
            })
        }

        function cariKontrak() {
            rl.question('Masukan NIM Mahasiswa: ', (nim) => {
                rl.question('Masukkan ID Mata Kuliah: ', (id) => {
                    Kontrak.search(nim, id, (err, data) => {
                        if (err) {
                            console.error(err);
                            process.exit(1)
                        }
                        if (data.length === 0){
                            console.log(`Kontrak dengan NIM ${nim} dan ID Mata Kuliah ${id} tidak ditemukan`);
                            KontrakView.menu();
                            menuOptions();
                        } else {
                            console.log(`
Hasil pencarian kontrak dengan id kontrak '${id}':
NIM       : ${data[0].nim}
ID Matkul : ${data[0].id_matkul}
Indeks    : ${data[0].id_matkul}
Tahun     : ${data[0].tahun_ajaran}
                            `);
                            KontrakView.menu();
                            menuOptions();
                        }
                    })
                })
            });
        }

        function hapusKontrak(){
            rl.question('Masukan NIM Mahasiswa: ', (nim) => {
                rl.question('Masukkan ID Mata Kuliah: ', (id) => {
                Kontrak.remove(nim, id, (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    } else {
                        console.log(`Kontrak dengan NIM ${nim} dan ID Mata Kuliah ${id} telah dihapus`);
                        daftarKontrak();
                    }
                    })
                })
            })
        }

        function tambahKontrak() {
            rl.question('Masukan NIM Mahasiswa: ', (nim) => {
                rl.question('Masukkan ID Mata Kuliah: ', (id) => {
                    rl.question('Masukkan Indeks Mahasiswa: ', (indeks) => {
                        rl.question('Masukkan Tahun Ajaran: ', (tahun) => {
                            Kontrak.add(nim, id, indeks, tahun, (err) => {
                                if(err) {
                                    console.error(err);
                                    tambahKontrak();
                                } else {
                                    console.log('Kontrak telah ditambahkan');
                                    daftarKontrak();
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
                        daftarKontrak();
                        break;
                    case "2":
                        cariKontrak();
                        break;
                    case "3":
                        tambahKontrak();
                        break;
                    case "4":
                        hapusKontrak();
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

        KontrakView.menu();
        menuOptions();

    }

}