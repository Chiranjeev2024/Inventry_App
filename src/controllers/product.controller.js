import path, { resolve } from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        res.render("products", {products:products})
    }

    getAddForm(req,res){
        return res.render('new-product', {errorMessage:null});
    }

    postAddProduct(req,res){
        ProductModel.add(req.body)
        let products = ProductModel.get();
        return res.render('products', {products:products});
    }

    getUpdateProductView(req,res,next){
        // 1. if product exists then return view.
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if (productFound) {
            res.render('update-product',{product:productFound, errorMessage:null});
        }
        // 2. else return errors.
        else{
            res.status(401).send('Product not found')
        }
    }

    postUpdateProduct(req,res){
        ProductModel.update(req.body)
        var products = ProductModel.get();
        return res.render('products', {products:products});
    }
}