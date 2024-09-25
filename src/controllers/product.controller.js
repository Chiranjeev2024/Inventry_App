import path, { resolve } from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        res.render("products", {products:products})
    }

    getAddForm(req,res){
        return res.render('new-product');
    }
}