const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        product_nm: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
