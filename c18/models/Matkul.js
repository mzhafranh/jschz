import { db } from "../main.js";

export class Matkul {
    static read(callback) {
        db.all('SELECT * FROM matkul', (err, data) => {
            callback(err, data);
        })
    }

    static add(id, nama, sks, callback){
        db.run('INSERT INTO matkul VALUES (?, ?, ?)', [id, nama, sks], (err) => {
            callback(err);
        });
    }

    static search(id, callback){
        db.all('SELECT * FROM matkul WHERE id_matkul = ?', [id], (err, data) => {
            callback(err, data);
        })
    }

    static remove(id, callback){
        db.run('DELETE FROM matkul WHERE id_matkul = ?', [id], (err) => {
            callback(err);
        })

    }
}