const Product = require("../models/product");



//  CREATE ONE PRODUCT 
module.exports.createNewProduct=(req,res)=>{
    Product.create(req.body)
    .then((newlyCreatedProduct)=>{
        res.json(newlyCreatedProduct);
    })
    .catch((err)=> res.json(err));
};