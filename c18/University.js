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

    describeMahasiswa(nim){
        function checkNim(item){
            if(item.getNim() === nim){
                return item;
            }
        }
        var mahasiswa = this.arrMahasiswa.find(checkNim);
        if (mahasiswa === undefined){
            console.log(`Mahasiswa dengan NIM ${nim} tidak terdaftar.`)
        } else {
            console.log(`NIM     : ${mahasiswa.getNim()}`);
            console.log(`Nama    : ${mahasiswa.getNama()}`);
            console.log(`Alamat  : ${mahasiswa.getAlamat()}`);
            console.log(`Jurusan : ${mahasiswa.getJurusan()}`);
        }
    }
    
    addMahasiswa(mahasiswa) {
        this.arrMahasiswa.push(mahasiswa);
    }

    delMahasiswa(nim) {
        let i = -1;
        function checkNim(item, index) {
            if (item.getNim() === nim) {
                i = index
            }
        }
        this.arrMahasiswa.forEach(checkNim);
        if (i !== (-1)) {
            this.arrMahasiswa.splice(i, 1);
            console.log(`Mahasiswa dengan NIM ${nim} berhasil dihapus.`);
        }
        else {
            console.log(`Mahasiswa dengan NIM ${nim} tidak terdaftar.`);
        }
    }

    addDosen(dosen) {
        this.arrDosen.push(dosen);
    }

    delDosen(id) {
        let i = -1;
        function checkId(item, index) {
            if (item.getId() === id) {
                i = index
            }
        }
        this.arrDosen.forEach(checkId);
        if (i !== (-1)) {
            this.arrDosen.splice(i, 1);
            console.log(`Dosen dengan ID ${id} berhasil dihapus.`);
        }
        else {
            console.log(`Dosen dengan ID ${id} tidak terdaftar.`);
        }
    }
}