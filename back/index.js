const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const router = express.Router();
const port = process.env.SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'db',
    user: process.env.MYSQL_USER || 'user_desafio_001_klock',
    password: process.env.MYSQL_PASSWORD || 'senha_desafio_001_rafael',
    database: process.env.MYSQL_DATABASE || 'preferences'
});

db.connect();

router.post('/', function (req, res) {
    console.log(req.ip);
    console.log(req.connection.remoteAddress)

    db.query(`INSERT INTO preferences SET ?`,
        { ...req.body, ip: req.ip },
        function (err, result) {
            if (err) throw err;
            return console.log('Saved. '),
            res.send(result);     
        }
    );
});

app.use('/', router);
app.listen(port);

console.log(`Running on port ${port}`);