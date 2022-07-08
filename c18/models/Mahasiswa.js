export class Mahasiswa {
    constructor() {
        this.nim = 0;
        this.nama = "";
        this.alamat = "";
        this.jurusan = 0;
    }

    setNim(nim) {
        this.nim = nim;
    }

    setNama(nama) {
        this.nama = nama;
    }

    setAlamat(alamat) {
        this.alamat = alamat;
    }

    setJurusan(jurusan) {
        this.jurusan = jurusan;
    }

    getNim() {
        return this.nim;
    }

    getNama() {
        return this.nama;
    }

    getAlamat() {
        return this.alamat;
    }

    getJurusan() {
        return this.jurusan;
    }
}