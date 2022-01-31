const mongoose = require('mongoose')
const mongoURL ='mongodb://localhost:27017/penjualan_Masker';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil connetct Database MONGODB')
    });