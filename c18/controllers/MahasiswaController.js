import { rl } from "../main.js";
import MahasiswaView from "../views/MahasiswaView.js";
import { MainMenuController } from "./MainMenuController.js";
import { Mahasiswa } from "../models/Mahasiswa.js";
import Table from "cli-table";

export default class MahasiswaController {
    static main(uni) {

        function daftarMahasiswa() {
            Mahasiswa.read(function (err, data) {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                const tableMahasiswa = new Table({
                    head: ['NIM Mahasiswa', 'Nama Mahasiswa', 'Jenis Kelamin', 'Jurusan', 'Pembimbing', 'Tanggal Lahir']
                    , colWidths: [15, 30, 15, 10, 25, 15]
                });

                data.forEach(item => {
                    tableMahasiswa.push([item.nim, item.nama_mahasiswa, item.jenis_kelamin, item.id_jurusan, item.pembimbing, item.tanggal_lahir]);
                });

                console.log(tableMahasiswa.toString());
                MahasiswaView.menu();
                menuOptions();
            })
        }

        function cariMahasiswa() {
            rl.question('Masukan NIM Mahasiswa: ', (nim) => {
                Mahasiswa.search(nim, (err, data) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    }
                    if (data.length === 0){
                        console.log(`Mahasiswa dengan NIM ${nim} tidak ditemukan`);
                        MahasiswaView.menu();
                        menuOptions();
                    } else {
                        console.log(`
Hasil pencarian mahasiswa dengan id mahasiswa '${nim}':
NIM Mahasiswa      : ${data[0].nim}
Nama Mahasiswa     : ${data[0].nama_mahasiswa}
Jenis Kelamin      : ${data[0].jenis_kelamin}
Jurusan            : ${data[0].id_jurusan}
Pembimbing         : ${data[0].pembimbing}
Tanggal Lahir      : ${data[0].tanggal_lahir}
                        `);
                        MahasiswaView.menu();
                        menuOptions();
                    }
                })
            });
        }

        function hapusMahasiswa(){
            rl.question('Masukkan NIM Mahasiswa: ', (answer) => {
                Mahasiswa.remove(answer, (err) => {
                    if (err) {
                        console.error(err);
                        process.exit(1)
                    } else {
                        console.log(`Mahasiswa dengan NIM: ${answer} telah dihapus`);
                        daftarMahasiswa();
                    }
                })
            })
        }

        function tambahMahasiswa() {
            rl.question('Masukkan NIM Mahasiswa: ', (nim) => {
                rl.question('Masukkan Nama Mahasiswa: ', (nama) => {
                    rl.question('Masukkan Jenis Kelamin Mahasiswa: ', (jk) => {
                        rl.question('Masukkan Jurusan Mahasiswa: ', (jurusan) => {
                            rl.question('Masukkan NIP Pembimbing Mahasiswa: ', (pembimbing) => {
                                rl.question('Masukkan Tanggal Lahir Mahasiswa: ', (tl) => {
                                    Mahasiswa.add(nim, nama, jk, jurusan, pembimbing, tl, (err) => {
                                        if(err) {
                                            console.error(err);
                                            tambahMahasiswa();
                                        } else {
                                            console.log('Mahasiswa telah ditambahkan');
                                            daftarMahasiswa();
                                        }
                                    })
                                })
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
                        daftarMahasiswa();
                        break;
                    case "2":
                        cariMahasiswa();
                        break;
                    case "3":
                        tambahMahasiswa();
                        break;
                    case "4":
                        hapusMahasiswa();
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

        MahasiswaView.menu();
        menuOptions();

    }

}