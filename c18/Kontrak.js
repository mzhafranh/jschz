export class Kontrak{
    constructor(){
        this.id = 0;
        this.nim = 0;
        this.matkul = 0;
    }

    setId(id){
        this.id = id;
    }
    
    setNim(nim) {
        this.nim = nim;
    }

    setMatkul(matkul) {
        this.matkul = matkul;
    }

    getId(){
        return this.id;
    }

    getNim(){
        return this.nim;
    }

    getMatkul(){
        return this.matkul;
    }
}