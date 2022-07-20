const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const fs = require('fs');
// const file_path = "./file.json"
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("c20db.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
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

function search(querry, filter, callback) {
    db.all(querry, filter, (err, data) => {
        callback(err, data);
    })
}

function add(id, string, integer, float, date, boolean, callback) {
    db.run('INSERT INTO data VALUES (?, ?, ?, ?, ?, ?)', [id, string, integer, float, date, boolean], (err) => {
        callback(err);
    });
}

function update(newId, oldId, string, integer, float, date, boolean, callback) {
    db.run('UPDATE data SET id = ?, string = ?, integer = ?, float = ?, date = ?, boolean = ? WHERE id = ?', [newId, string, integer, float, date, boolean, oldId], (err) => {
        callback(err);
    });
}

function remove(id, callback) {
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
    const page = req.query.page || 1;
    const limit = 5;
    const offset = (page - 1) * limit;

    db.all('SELECT COUNT(*) AS total FROM data', (err,data) => {
        if (err) {
            console.error(err);
        }
        const pages = Math.ceil(data[0].total / limit)
        db.all('SELECT * FROM data LIMIT ? OFFSET ?', [limit, offset], (err,data) => {
            if (err) {
                console.error(err);
            }
            res.render('list', { rows: data , pages, page})
        })
    })
})

app.post('/', (req, res) => {
    var totalQuerry = 'SELECT COUNT(*) FROM data ';
    var querry = 'SELECT * FROM data ';
    var filter = [];
    if (req.body.idCheck == 'on' || req.body.stringCheck == 'on' || req.body.integerCheck == 'on' || req.body.floatCheck == 'on' || req.body.dateCheck == 'on' || req.body.booleanCheck == 'on') {
        querry += 'WHERE ';
        totalQuerry += 'WHERE ';
    } else {
        res.redirect('/')
    }
    if (req.body.idCheck == 'on'){
        querry += 'id = ? '
        totalQuerry += 'id= ? '
        filter.push(req.body.id);
    }
    if (req.body.stringCheck == 'on'){
        if (req.body.idCheck == 'on') {
            querry += 'AND ';
            totalQuerry += 'AND ';
        }
        querry += 'string = ? '
        totalQuerry += 'string = ? ';
        filter.push(req.body.string);
    }
    if (req.body.integerCheck == 'on'){
        if (req.body.idCheck == 'on' || req.body.stringCheck == 'on') {
            querry += 'AND ';
            totalQuerry += 'AND ';
        }
        querry += 'integer = ? '
        totalQuerry += 'integer = ? ';
        filter.push(parseInt(req.body.integer));
    }
    if (req.body.floatCheck == 'on'){
        if (req.body.idCheck == 'on' || req.body.stringCheck == 'on' || req.body.integerCheck == 'on') {
            querry += 'AND ';
            totalQuerry += 'AND ';
        }
        querry += 'float = ? '
        totalQuerry += 'float = ? ';
        filter.push(parseFloat(req.body.float));
    }
    if (req.body.dateCheck == 'on'){
        if (req.body.idCheck == 'on' || req.body.stringCheck == 'on' || req.body.integerCheck == 'on' || req.body.floatCheck == 'on') {
            querry += 'AND ';
            totalQuerry += 'AND ';
        }
        if (req.body.startDate != '' && req.body.endDate != ''){
            querry += 'date BETWEEN ? AND ? '
            totalQuerry += 'date BETWEEN ? AND ? ';
            filter.push(req.body.startDate);
            filter.push(req.body.endDate);
        } else if (req.body.startDate != '') {
            querry += 'date > ?'
            totalQuerry += 'date > ?';
            filter.push(req.body.startDate);
        } else if (req.body.endDate != '') {
            querry += 'date < ?'
            totalQuerry += 'date < ?';
            filter.push(req.body.endDate);
        }
        
    }
    if (req.body.booleanCheck == 'on'){
        if (req.body.idCheck == 'on' || req.body.stringCheck == 'on' || req.body.integerCheck == 'on' || req.body.floatCheck == 'on' || req.body.dateCheck == 'on') {
            querry += 'AND ';
            totalQuerry += 'AND ';
        }
        querry += 'boolean = ? '
        totalQuerry += 'boolean = ? ';
        filter.push(req.body.boolean);
    }

    search(totalQuerry, filter, (err, data) => {
        if (err) {
            console.error(err);
        }
        const page = req.query.page || 1;
        const limit = 5;
        const offset = (page - 1) * limit;
        const pages = Math.ceil(data[0].total / limit)
        querry += 'LIMIT ? OFFSET ?';
        filter.push(limit);
        filter.push(offset);
        search(querry, filter, (err, data) => {
            console.log(data)
            if (err) {
                console.error(err);
            }
            res.render('list', { rows: data , pages, page})
        })
    })
})


app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    add(req.body.id, req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, req.body.boolean, (err) => {
        if (err) {
            console.error(err);
        }
    })
    res.redirect('/');
})

app.get('/delete/:id', (req, res) => {
    const index = req.params.id
    remove(index, (err) => {
        if (err) {
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
        res.render('edit', { item: data[0] })
    })
})

app.post('/edit/:id', (req, res) => {
    update(req.body.id, req.params.id, req.body.string, parseInt(req.body.integer), parseFloat(req.body.float), req.body.date, req.body.boolean, (err) => {
        if (err) {
            console.error(err)
        }
        res.redirect('/');
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})