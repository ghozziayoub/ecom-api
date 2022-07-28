const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        adresse: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
            required: true
        }
    }
)

const Client = mongoose.model("clients", clientSchema)

module.exports = Client