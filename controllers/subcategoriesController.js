const express = require("express")

const SubCategory = require("./../models/subcategory")
const Category = require("./../models/category")

const app = express()

app.get("/", async (req, res) => {

    try {
        let subcategories = await SubCategory.find()
        let allSubCategories = []

        for (let i = 0; i < subcategories.length; i++) {
            let category = await Category.findOne({ _id: subcategories[i].idCategory })
            // subcategories[i] + category
            let subCategory = { 
                _id:subcategories[i]._id,
                name:subcategories[i].name,
                category:category
            }
            allSubCategories.push(subCategory)
        }

        res.status(200).send(allSubCategories)
    } catch (e) {
        res.status(400).send({ message: "error fetching subcategories" })
    }

})

app.get("/:id", async (req, res) => {

    try {

        let subcategoryId = req.params.id
        let subcategory = await SubCategory.findOne({ _id: subcategoryId })

        if (subcategory) {
            res.status(200).send(subcategory)
        }
        else {
            res.status(404).send({ message: "subcategory not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching subcatgeory" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let subcategory = new SubCategory({
            name: data.name,
            idCategory: data.idCategory
        })

        await subcategory.save()

        res.status(201).send({ message: "subcategory added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "subcategory not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let subcategoryId = req.params.id
        let data = req.body
        let subcategory = await SubCategory.findOneAndUpdate({ _id: subcategoryId }, data)

        if (subcategory) {
            res.status(200).send({ message: "subcategory updated succesfully" })
        }
        else {
            res.status(404).send({ message: "subcategory not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching subcatgeory" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let subcategoryId = req.params.id

        let subcategory = await SubCategory.findOneAndDelete({ _id: subcategoryId })

        if (subcategory) {
            res.status(200).send({ message: "subcategory deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "subcategory not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching subcatgeory" })
    }

})

module.exports = app