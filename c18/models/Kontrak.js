import { db } from "../main.js";

export class Kontrak {
    static read(callback) {
        db.all('SELECT * FROM ambil_matkul', (err, data) => {
            callback(err, data);
        })
    }

    static add(nim, id, indeks, tahun, callback){
        db.run('INSERT INTO ambil_matkul VALUES (?, ?, ?, ?)', [nim, id, indeks, tahun], (err) => {
            callback(err);
        });
    }

    static search(nim, id, callback){
        db.all('SELECT * FROM ambil_matkul WHERE nim = ? AND id_matkul = ?', [nim, id], (err, data) => {
            callback(err, data);
        })
    }

    static remove(nim, id, callback){
        db.run('DELETE FROM ambil_matkul WHERE nim = ? AND id_matkul = ?', [nim, id], (err) => {
            callback(err);
        })

    }
}