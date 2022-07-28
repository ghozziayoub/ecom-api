const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false
        },
        image: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true,
            unique: false
        },
        description: {
            type: String,
            required: true,
            unique: false
        },
        idSubCategory: {
            type: Number,
            required: true
        },
        idCategory: {
            type: Number,
            required: true
        },
    }
)

const Product = mongoose.model("product", productSchema)

module.exports = Product