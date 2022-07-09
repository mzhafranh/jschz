import { db } from "../main.js";

export class Jurusan {
    static read(callback) {
        db.all('SELECT * FROM jurusan', (err, data) => {
            callback(err, data);
        })
    }

    static add(id, nama, callback){
        db.run('INSERT INTO jurusan VALUES (?, ?)', [id, nama], (err) => {
            callback(err);
        });
    }

    static search(id, callback){
        db.all('SELECT * FROM jurusan WHERE id_jurusan = ?', [id], (err, data) => {
            callback(err, data);
        })
    }

    static remove(id, callback){
        db.run('DELETE FROM jurusan WHERE id_jurusan = ?', [id], (err) => {
            callback(err);
        })

    }
}