const mongoose = require("mongoose")

const subCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        idCategory: {
            type: Number,
            required: true
        }
    }
)

const SubCategory = mongoose.model("subcategories", subCategorySchema)

module.exports = SubCategory