export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }

  static add(productObj) {
    let newProduct = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.imageUrl
    );
    products.push(newProduct);
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for product 1",
    19.99,
    "../images/book1.webp"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for product 3",
    2999,
    "./images/book2.webp"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for product 3",
    579.0,
    "./images/book3.webp"
  ),
  new ProductModel(
    4,
    "Product 4",
    "Description for product 4",
    209.99,
    "./images/book4.webp"
  ),
  new ProductModel(
    5,
    "Product 5",
    "Description for product 5",
    19.99,
    "../images/book5.webp"
  ),
  new ProductModel(
    6,
    "Product 6",
    "Description for product 6",
    2999,
    "./images/book6.webp"
  ),
  new ProductModel(
    7,
    "Product 7",
    "Description for product 7",
    579.0,
    "./images/book7.webp"
  ),
  new ProductModel(
    8,
    "Product 8",
    "Description for product 8",
    209.99,
    "./images/book8.webp"
  ),
  new ProductModel(
    9,
    "Product 9",
    "Description for product 9",
    19.99,
    "../images/book9.webp"
  ),
  new ProductModel(
    10,
    "Product 10",
    "Description for product 10",
    2999,
    "./images/book10.webp"
  ),
  new ProductModel(
    11,
    "Product 11",
    "Description for product 11",
    579.0,
    "./images/book11.webp"
  ),
  new ProductModel(
    12,
    "Product 12",
    "Description for product 12",
    209.99,
    "./images/book12.webp"
  ),
];
