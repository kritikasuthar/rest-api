const Product = require('../models/productModel'); // Corrected path to model

const productController = {
    async index(req, res, next) {
        try {
            const products = await Product.find();
            res.status(200).json({ products });
        } catch (error) {
            res.status(500).json({ error: "Server error.", serverError: error });
        }
    },
    
    async store(req, res, next) {
        try {
            const { category, subcategory, product_nm, price } = req.body;
            const product = await Product.create({ category, subcategory, product_nm, price });
            res.status(201).json({ product });
        } catch (error) {
            res.status(500).json({ error: "Server error.", serverError: error });
        }
    },
};

module.exports = productController;
