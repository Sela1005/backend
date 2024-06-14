const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        image: {type: String, required: true},
        type: {type: Number, required: true},
        price: {type: Number, required: true},
        countInStock: {type: Number, required: true},
        rating: {type: Number, required: true},
        description: {type: String, required: true ,}
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('product', productSchema);

module.exports = Product;