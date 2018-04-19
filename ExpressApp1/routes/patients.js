var express = require('express');
var router = express.Router();


const cn = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
}; 

var pgp = require('pg-promise')(/*options*/);
var db = pgp(cn);

//testing db connection
function connect(req, res, next) {
    db.any('select * from patients')
        .then(data => {
            var json = JSON.stringify(data)
            json = JSON.parse(json)
            console.log(json)
            res.render('patients', { title: 'Express', patients: json });
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
}

/* GET home page. */
router.get('/', connect);

module.exports = router;
