import { db } from "../main.js";

export class Mahasiswa {
    static read(callback) {
        db.all('SELECT * FROM mahasiswa', (err, data) => {
            callback(err, data);
        })
    }

    static add(nim, nama, jk, jurusan, pembimbing, tl, callback){
        db.run('INSERT INTO mahasiswa VALUES (?, ?, ?, ?, ?, ?)', [nim, nama, jk, jurusan, pembimbing, tl], (err) => {
            callback(err);
        });
    }

    static search(nim, callback){
        db.all('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (err, data) => {
            callback(err, data);
        })
    }

    static remove(nim, callback){
        db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
            callback(err);
        })

    }
}