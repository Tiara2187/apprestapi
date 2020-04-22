'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    //Tampil untuk semua data mahasiswa
     app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);
    
    //Tampil untuk semua data berdasarkan id
    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    //Tambah data untuk tabel mahasiswa
    app.route('/tambah')
    .post(jsonku.tambahMahasiswa);
}