const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Seller = mongoose.model("sellers", sellerSchema)

module.exports = Seller