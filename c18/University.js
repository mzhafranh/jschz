import { Mahasiswa } from "./Mahasiswa.js";
import { Dosen } from "./Dosen.js";
import { Jurusan } from "./Jurusan.js";
import { Kontrak } from "./Kontrak.js";
import { Matkul } from "./Matkul.js";

import Table from "cli-table";

export class University {
    constructor() {
        this.arrMahasiswa = [];
        this.arrDosen = [];
        this.arrJurusan = [];
        this.arrMatkul = [];
        this.arrKontrak = [];
    }

    showMahasiswa() {
        var table = new Table({
            head: ['NIM', 'Nama', 'Alamat', 'Jurusan']
            , colWidths: [10, 30, 30, 10]
        });

        let temp = [];
        function isiTemp(item, index) {
            table.push([item.getNim(), item.getNama(), item.getAlamat(), item.getJurusan()]);
        }
        this.arrMahasiswa.forEach(isiTemp);
        console.log(table.toString());
    }

    describeMahasiswa(nim) {
        function checkNim(item) {
            if (item.getNim() === nim) {
                return item;
            }
        }
        let mahasiswa = this.arrMahasiswa.find(checkNim);
        if (mahasiswa === undefined) {
            console.log(`Mahasiswa dengan NIM ${nim} tidak terdaftar.`)
        } else {
            console.log(`NIM     : ${mahasiswa.getNim()}`);
            console.log(`Nama    : ${mahasiswa.getNama()}`);
            console.log(`Alamat  : ${mahasiswa.getAlamat()}`);
            console.log(`Jurusan : ${mahasiswa.getJurusan()}`);
        }
    }

    addMahasiswa(mahasiswa) {
        let nim = mahasiswa.getNim();
        function checkNim(item) {
            if (item.getNim() === nim) {
                return item;
            }
        }
        let index = this.arrMahasiswa.findIndex(checkNim);
        if (index === (-1)){
        this.arrMahasiswa.push(mahasiswa);
        } else {
            console.log(`Mahasiswa dengan NIM ${nim} sudah terdaftar, masukkan NIM lain.`);
        }
    }

    delMahasiswa(nim) {
        function checkNim(item) {
            if (item.getNim() === nim) {
                return item;
            }
        }
        let index = this.arrMahasiswa.findIndex(checkNim);
        if (index === (-1)) {
            console.log(`Mahasiswa dengan NIM ${nim} tidak terdaftar.`)
        } else {
            this.arrMahasiswa.splice(index, 1);
            console.log(`Mahasiswa dengan NIM ${nim} berhasil dihapus.`);
        }
    }

    showJurusan() {
        var table = new Table({
            head: ['ID', 'Nama']
            , colWidths: [10, 30]
        });

        let temp = [];
        function isiTemp(item, index) {
            table.push([item.getId(), item.getNama()]);
        }
        this.arrMahasiswa.forEach(isiTemp);
        console.log(table.toString());
    }

    describeJurusan(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let jurusan = this.arrJurusan.find(checkId);
        if (jurusan === undefined) {
            console.log(`Jurusan dengan ID ${id} tidak terdaftar.`)
        } else {
            console.log(`ID      : ${dosen.getId()}`);
            console.log(`Nama    : ${dosen.getNama()}`);
        }
    }

    addJurusan(jurusan) {
        let id = jurusan.getId();
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let index = this.arrJurusan.findIndex(checkId);
        if (index === (-1)) {
        this.arrDosen.push(jurusan);
        } else {
            console.log(`Jurusan dengan ID ${id} sudah terdaftar, masukkan ID lain.`);
        }
    }

    delJurusan(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let index = this.arrJurusan.findIndex(checkId);
        if (index === (-1)) {
            console.log(`Jurusan dengan ID ${id} tidak terdaftar.`)
        } else {
            this.arrJurusan.splice(index, 1);
            console.log(`Jurusan dengan ID ${id} berhasil dihapus.`);
        }
    }

    showDosen() {
        var table = new Table({
            head: ['ID', 'Nama']
            , colWidths: [10, 30]
        });

        let temp = [];
        function isiTemp(item, index) {
            table.push([item.getId(), item.getNama()]);
        }
        this.arrDosen.forEach(isiTemp);
        console.log(table.toString());
    }

    describeDosen(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let dosen = this.arrDosen.find(checkId);
        if (dosen === undefined) {
            console.log(`Dosen dengan ID ${id} tidak terdaftar.`)
        } else {
            console.log(`ID      : ${dosen.getId()}`);
            console.log(`Nama    : ${dosen.getNama()}`);
        }
    }

    addDosen(dosen) {
        let id = dosen.getId();
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let index = this.arrDosen.findIndex(checkId);
        if (index === (-1)) {
            this.arrDosen.push(dosen);
        } else {
            console.log(`Dosen dengan ID ${id} sudah terdaftar, masukkan ID lain.`);
        }
    }

    delDosen(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        var index = this.arrDosen.findIndex(checkId);
        if (index === (-1)) {
            console.log(`Dosen dengan ID ${id} tidak terdaftar.`)
        } else {
            this.arrDosen.splice(index, 1);
            console.log(`Dosen dengan ID ${id} berhasil dihapus.`);
        }
    }

    showMatkul() {
        var table = new Table({
            head: ['ID', 'Nama']
            , colWidths: [10, 30]
        });

        let temp = [];
        function isiTemp(item, index) {
            table.push([item.getId(), item.getNama()]);
        }
        this.arrMatkul.forEach(isiTemp);
        console.log(table.toString());
    }

    describeMatkul(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let matkul = this.arrMatkul.find(checkId);
        if (matkul === undefined) {
            console.log(`Matkul dengan ID ${id} tidak terdaftar.`)
        } else {
            console.log(`ID      : ${matkul.getId()}`);
            console.log(`Nama    : ${matkul.getNama()}`);
        }
    }

    addMatkul(matkul) {
        let id = matkul.getId();
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let index = this.arrMatkul.findIndex(checkId);
        if (index === (-1)) {
            this.arrMatkul.push(matkul);
        } else {
            console.log(`Matkul dengan ID ${id} sudah terdaftar, masukkan ID lain.`);
        }
    }

    delMatkul(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        var index = this.arrMatkul.findIndex(checkId);
        if (index === (-1)) {
            console.log(`Matkul dengan ID ${id} tidak terdaftar.`)
        } else {
            this.arrMatkul.splice(index, 1);
            console.log(`Matkul dengan ID ${id} berhasil dihapus.`);
        }
    }

    showKontrak() {
        var table = new Table({
            head: ['ID', 'NIM', 'Mata Kuliah']
            , colWidths: [10, 10, 30]
        });

        let temp = [];
        function isiTemp(item, index) {
            table.push([item.getId(), item.getNim(), item.getMatkul()]);
        }
        this.arrKontrak.forEach(isiTemp);
        console.log(table.toString());
    }

    describeKontrak(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        let kontrak = this.arrKontrak.find(checkId);
        if (kontrak === undefined) {
            console.log(`Kontrak dengan ID ${id} tidak terdaftar.`)
        } else {
            console.log(`ID          : ${kontrak.getId()}`);
            console.log(`NIM         : ${kontrak.getNim()}`);
			console.log(`Mata Kuliah : ${kontrak.getMatkul()}`);
        }
    }

    addKontrak(kontrak) {
        let nim = kontrak.getNim();
        function checkNim(item) {
            if (item.getNim() === nim) {
                return item;
            }
        }
        let indexMahasiswa = this.arrMahasiswa.findIndex(checkNim);
        
        let idMatkul = kontrak.getMatkul();
        function checkId(item) {
            if (item.getId() === idMatkul) {
                return item;
            }
        }
        let indexMatkul = this.arrMatkul.findIndex(checkId);

        if(indexMahasiswa !== (-1) && indexMatkul !== (-1)){
            let id = kontrak.getId();
            function checkId(item) {
                if (item.getId() === id) {
                    return item;
                }
            }
            let index = this.arrKontrak.findIndex(checkId);
            if (index === (-1)) {
                this.arrKontrak.push(kontrak);
            } else {
                console.log(`Kontrak dengan ID ${id} sudah terdaftar, masukkan ID lain.`);
            }
        } else {
            console.log(`Mahasiswa atau Matkul tidak terdaftar.`);
        }

        
    }

    delKontrak(id) {
        function checkId(item) {
            if (item.getId() === id) {
                return item;
            }
        }
        var index = this.arrKontrak.findIndex(checkId);
        if (index === (-1)) {
            console.log(`Kontrak dengan ID ${id} tidak terdaftar.`)
        } else {
            this.arrKontrak.splice(index, 1);
            console.log(`Kontrak dengan ID ${id} berhasil dihapus.`);
        }
    }
}