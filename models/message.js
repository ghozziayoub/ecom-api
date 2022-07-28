const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            unique: true
        },
        lastName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        message: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Message = mongoose.model("message", messageSchema)

module.exports = Message