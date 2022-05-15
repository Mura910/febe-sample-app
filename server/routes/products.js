const express = require('express');
const Product = require('../model/product');
const router = express.Router();

//空の時にOKと返す
router.get('', function (req, res) {
    //データベースからデータを見つける（find）
    Product.find({}, function (err, foundProducts) {
        res.json(foundProducts)
    })
});

module.exports = router;