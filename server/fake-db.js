const Product = require("./model/product")

class FakeDb {

    constructor() {
        this.products = [
            {
                coverimage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: "大きい",
                heading2: "大容量",
                heading3: "わわわ",
                headingtext1: "sssssss sssssss sssssss ",
                headingtext2: "aaaaaaa aaaaaaa aaaaaaa ",
                headingtext3: "mmmmmmm mmmmmmm mmmmmmm ",
            },
            {
                coverimage: './assets/img/woocommerce-placeholder.png',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: "ちいさい",
                heading2: "軽い",
                heading3: "いいい",
                headingtext1: "sssssss sssssss sssssss ",
                headingtext2: "aaaaaaa aaaaaaa aaaaaaa ",
                headingtext3: "mmmmmmm mmmmmmm mmmmmmm ",
            },
            {
                coverimage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: "標準",
                heading2: "お得",
                heading3: "ううう",
                headingtext1: "sssssss sssssss sssssss ",
                headingtext2: "aaaaaaa aaaaaaa aaaaaaa ",
                headingtext3: "mmmmmmm mmmmmmm mmmmmmm ",
            },
            {
                coverimage: './assets/img/phone-cover.jpg',
                name: 'Phone special',
                price: 999,
                description: '',
                heading1: "プレミアム",
                heading2: "限定",
                heading3: "むむむ",
                headingtext1: "sssssss sssssss sssssss ",
                headingtext2: "aaaaaaa aaaaaaa aaaaaaa ",
                headingtext3: "mmmmmmm mmmmmmm mmmmmmm ",
            }
        ]
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsToDb();
    }
}

module.exports= FakeDb;