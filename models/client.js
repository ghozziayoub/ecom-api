const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Client = mongoose.model("clients", clientSchema)

module.exports = Client