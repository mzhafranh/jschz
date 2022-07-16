const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const fs = require('fs');
// const file_path = "./file.json"
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("c20db.db", sqlite3.OPEN_READWRITE, err => {
    if (err){
        console.err(err);
    }
})

function read(callback) {
    db.all('SELECT * FROM data', (err, data) => {
        callback(err, data);
    })
}

function select(id, callback) {
    db.all('SELECT * FROM data WHERE id = ?', id, (err, data) => {
        callback(err, data);
    })
}

function add(id, string, integer, float, date, boolean, callback){
    db.run('INSERT INTO data VALUES (?, ?, ?, ?, ?, ?)', [id, string, integer, float, date, boolean], (err) => {
        callback(err);
    });
}

function update(newId, oldId, string, integer, float, date, boolean, callback){
    db.run('UPDATE data SET id = ?, string = ?, integer = ?, float = ?, date = ?, boolean = ? WHERE id = ?', [newId, string, integer, float, date, boolean, oldId], (err) => {
        callback(err);
    });
}

function remove(id, callback){
    db.run('DELETE FROM data WHERE id = ?', [id], (err) => {
        callback(err);
    })
}

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    read(function (err, data) {
        if(err){
            console.error(err);
        }
        res.render('list', { rows: data })
    })
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    add(req.body.id, req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, req.body.boolean, (err) => {
        if(err) {
            console.error(err);
        }
    })
    res.redirect('/');
})

app.get('/delete/:id', (req, res) => {
    const index = req.params.id
    remove(index, (err) => {
        if (err){
            console.error(err);
        }
    })
    res.redirect('/');
})

app.get('/edit/:id', (req, res) => {
    select(req.params.id, (err, data) => {
        if (err) {
            console.error(err);
        }
        res.render('edit', {item: data[0]})
    })
})

app.post('/edit/:id', (req, res) => {
    update(req.body.id, req.params.id, req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, req.body.boolean, (err) => {
        if(err) {
            console.error(err)
        }
        res.redirect('/');
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

