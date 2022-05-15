const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    //   author: ObjectId,
    coverimage: String,
    name: { type: String, rewuired: true, max: [60, '最大60文字までです'] },
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String
});

module.exports = mongoose.model('Product', ProductSchema)

//このあたりの描き方は、https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/mongoose#one_schemamodel_per_file　にのっとっているように見える。
