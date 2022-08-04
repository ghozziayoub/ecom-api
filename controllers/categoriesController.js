const express = require("express")

const Category = require("./../models/category")

const app = express()

app.get("/", async (req, res) => {

    try {
        let categories = await Category.find()
        res.status(200).send(categories)
    } catch (error) {
        res.status(400).send({ message: "error fetching categories" })
    }

})

app.get("/:id", async (req, res) => {
    try {

        let idCategory = req.params.id
        let category = await Category.findOne({ _id: idCategory })

        if (category) {
            res.status(200).send(category)
        }
        else {
            res.status(404).send({ message: "category not found " })
        }

    } catch (error) {
        res.status(400).send({ message: "error" })
    }

})

app.post("/", async (req, res) => {
    try {
        let data = req.body
        let category = new Category({ name: data.name })

        await category.save()
        res.status(200).send({ message: " category added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "category not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let idCategory = req.params.id
        let data = req.body

        let category = await Category.findOneAndUpdate({ _id: idCategory }, data)

        if (category) {
            res.status(200).send({ message: "category update succesfully" })
        }
        else {
            res.status(404).send({ message: "category not found" })
        }

    } catch (e) {
        res.status(400).send({ message: "error" })
    }

})

app.delete("/:id", async (req, res) => {
    try {

        let idCategory = req.params.id

        let category = await Category.findOneAndDelete({ _id: idCategory })

        if (category) {
            res.status(200).send({ message: "category dellted succesfully" })

        } else {
            res.status(404).send({ message: "category not found " })
        }

    } catch (e) {
        res.status(400).send({ message: "error " })
    }

})

module.exports = app