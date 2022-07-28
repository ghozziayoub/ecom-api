const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        idCategory:{
            type: String,
            required: true,
            unique:true

        },
        idUser: {
            type: String,
            required: true,
            unique: true
        },
        idProduct: {
            type: String,
            required: true,
            unique: true
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