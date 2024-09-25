import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from "express-ejs-layouts";
import path from 'path';


const server = express();

// SetUp view Engine settings

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

server.use(ejsLayouts);

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/new',productController.getAddForm);

server.use(express.static('src/views'));


server.listen(3500);