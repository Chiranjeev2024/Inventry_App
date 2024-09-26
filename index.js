import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from "express-ejs-layouts";
import path from 'path';
import validateRequest from './src/middleware/validation.middleware.js';


const server = express();

// parse  Form data

server.use(express.urlencoded({extended: true}));

// SetUp view Engine settings

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

server.use(ejsLayouts);

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/add-product',productController.getAddForm);
server.post('/', validateRequest, productController.postAddProduct); 
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/update-product',productController.postUpdateProduct);


server.use(express.static('src/views'));


server.listen(3400);