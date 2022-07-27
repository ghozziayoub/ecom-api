const express = require("express")

const Category = require("./../models/category")

const app = express()

app.get("/", (req, res) => {

    Category
        .find()
        .then((categories) => {
            res.status(200).send(categories)
        })
        .catch(() => {
            res.status(400).send({ message: "error fetching categories" })
        })

})

app.get("/:id", (req, res) => {

    let categoryId = req.params.id

    Category.findOne({ _id: categoryId })
        .then((category) => {

            if (category) {
                res.status(200).send(category)
            }
            else {
                res.status(404).send({ message: "category not found !" })
            }

        })
        .catch(() => {
            res.status(400).send({ message: "error fetching catgeory" })
        })

})

app.post("/", (req, res) => {
    let data = req.body

    let category = new Category({
        name: data.name
    })

    category
        .save()
        .then(() => {
            res.status(201).send({ message: "category added succesfully" })
        })
        .catch(() => {
            res.status(400).send({ message: "category not saved " })
        })

})

app.patch("/:id", (req, res) => {
    let categoryId = req.params.id
    let data = req.body
    Category.findOneAndUpdate({ _id: categoryId }, data)
        .then((category) => {

            if (category) {
                res.status(200).send({ message: "category updated succesfully" })
            }
            else {
                res.status(404).send({ message: "category not found !" })
            }

        })
        .catch(() => {
            res.status(400).send({ message: "error fetching catgeory" })
        })

})

app.delete("/:id", (req, res) => {

    let categoryId = req.params.id

    Category.findOneAndDelete({ _id: categoryId })
        .then((category) => {

            if (category) {
                res.status(200).send({ message: "category deleted succesfully" })
            }
            else {
                res.status(404).send({ message: "category not found !" })
            }

        })
        .catch(() => {
            res.status(400).send({ message: "error fetching catgeory" })
        })

})

module.exports = app