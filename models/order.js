const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true
        },
        ordernumber:{
            type: Number,
            required: true,
            unique: true
        },
        idUser: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Order = mongoose.model("orders", orderSchema)

module.exports = Order