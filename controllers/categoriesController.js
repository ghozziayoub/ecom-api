const express = require("express")

const Category = require("./../models/category")

const app = express()

app.get("/", async (req, res) => {

    try {
        let categories = await Category.find()
        res.status(200).send(categories)
    } catch (e) {
        res.status(400).send({ message: "error fetching categories" })
    }

})

app.get("/:id", async (req, res) => {

    try {

        let categoryId = req.params.id
        let category = await Category.findOne({ _id: categoryId })

        if (category) {
            res.status(200).send(category)
        }
        else {
            res.status(404).send({ message: "category not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching catgeory" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let category = new Category({
            name: data.name
        })

        await category.save()

        res.status(201).send({ message: "category added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "category not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let categoryId = req.params.id
        let data = req.body
        let category = await Category.findOneAndUpdate({ _id: categoryId }, data)

        if (category) {
            res.status(200).send({ message: "category updated succesfully" })
        }
        else {
            res.status(404).send({ message: "category not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching catgeory" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let categoryId = req.params.id

        let category = await Category.findOneAndDelete({ _id: categoryId })

        if (category) {
            res.status(200).send({ message: "category deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "category not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching catgeory" })
    }

})

module.exports = app