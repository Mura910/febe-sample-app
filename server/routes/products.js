const express = require('express');
const Product = require('../model/product');
const router = express.Router();

//空の時にOKと返す
router.get('', function (req, res) {
    //データベースからデータを見つける（find）
    Product.find({}, function (err, foundProducts) {
        return res.json(foundProducts);
    })
});

//productIdを指定したときに、その商品を返す
router.get('/:productId', function (req, res) {
    //URLのproductIdを取得する
    const productId = req.params.productId;
    //データベースからデータを見つける（find）
    Product.findById(productId, function (err, foundProduct) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'Product error', detail: 'product not found!' }] });
        }
        return res.json(foundProduct)
    })
});

module.exports = router;