var express = require('express');
var auth = require('./auth');
var router = express.Router();
// var verifikasi = require('./verifikasi');

//daftarkan menu
router.post('/api/v1/register', auth.registrasi);


module.exports = router;