const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')

//マングースでDBにつなぐ
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        const fakeDb = new FakeDb();
        fakeDb.initDb();
    }
);

const app = express();

app.use('/api/v1/products',productRoutes)

// //nodeサーバーでproductsというリクエストが来た場合は、successを呼び出しもとで実行してね、というコード。
// app.get('/products', function (req, res) {
//     res.json({ 'success': true })
// })

//herokの時はその環境のポートを読む、何かしらの理由で読めないときは、3001をよむ
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('I am running!')
})

//↑の状態でターミナルでcd serve, node index.js で実行すると、3001と接続して「I am runnning!」が表示される。
