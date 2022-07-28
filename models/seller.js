const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        adresse: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        shopName: {
            type: String,
            required: true
        },
         logoShop: {
            type: String,
            required: true
        }
    }
)

const Seller = mongoose.model("sellers", sellerSchema)

module.exports = Seller