export default class ProductModel {

    constructor(_id, _name, _desc, _price, _imageUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl
    }

    static get(){
        return products;
    }
}

var products = [
    new ProductModel(
        1,
        'Product 1',
        'Description for product 1',
        19.99,
        './views/images/book1.webp'
    ),
    new ProductModel(
        1,
        'Product 1',
        'Description for product 1',
        19.99,
        './views/images/book1.webp'
    ),
    new ProductModel(
        1,
        'Product 1',
        'Description for product 1',
        19.99,
        './views/images/book1.webp'
    ),
    new ProductModel(
        1,
        'Product 1',
        'Description for product 1',
        19.99,
        './views/images/book1.webp'
    ),
]