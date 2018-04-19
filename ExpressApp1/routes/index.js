'use strict';
var express = require('express');
var router = express.Router();

//var pgp = require('pg-promise')(/*options*/);
//var db = pgp('postgres://postgres:postgres@localhost:5432/howdy');

router.get('/', function (req, res) {
    res.render('index');
}); 

module.exports = router;
