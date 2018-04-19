var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')(/*options*/);

const cn = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
};
//var db = pgp('postgres://postgres:postgres@localhost:5432/howdy');
var db = pgp(cn);

//testing db connection
function connect(req, res, next) {
    db.any('select * from message')
        .then(data => {
            var json = JSON.stringify(data)
            json = JSON.parse(json)
            console.log(json)
            res.render('messages', { title: 'Express', messages: json });
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}

/* GET home page. */
router.get('/', connect);

module.exports = router;
