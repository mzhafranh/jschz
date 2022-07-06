export class Kontrak{
    constructor(){
        this.nim = 0;
        this.matkul = 0;
    }
    
    setNim(nim) {
        this.nim = nim;
    }

    setMatkul(matkul) {
        this.matkul = matkul;
    }

    getNim(){
        return this.nim;
    }

    getMatkul(){
        return this.matkul;
    }
}