export class Dosen {
    constructor() {
        this.id = 0;
        this.nama = "";
    }

    setId(id) {
        this.id = id;
    }

    setNama(nama) {
        this.nama = nama;
    }

    getId(){
        return this.id;
    }

    getNama(){
        return this.nama;
    }
}