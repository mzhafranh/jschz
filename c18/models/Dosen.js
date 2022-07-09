import { db } from "../main.js";

export class Dosen {
    static read(callback) {
        db.all('SELECT * FROM dosen', (err, data) => {
            callback(err, data);
        })
    }

    static add(nip, nama, jenis_kelamin, gaji, callback){
        db.run('INSERT INTO dosen VALUES (?, ?, ?, ?)', [nip, nama, jenis_kelamin, gaji], (err) => {
            callback(err);
        });
    }

    static search(nip, callback){
        db.all('SELECT * FROM dosen WHERE nip = ?', [nip], (err, data) => {
            callback(err, data);
        })
    }

    static remove(nip, callback){
        db.run('DELETE FROM dosen WHERE nip = ?', [nip], (err) => {
            callback(err);
        })

    }
}