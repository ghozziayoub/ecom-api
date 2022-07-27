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

    let categories = [
        { id: 1, name: "beauté" },
        { id: 2, name: "vetement" }
    ]

    let category = categories.find(c => c.id == categoryId)

    res.send(category)

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
    console.log(categoryId);
    console.log(data);
    res.send({ message: "category updated succesfully" })
})

app.delete("/:id", (req, res) => {
    let categoryId = req.params.id
    console.log(categoryId);
    res.send({ message: "category deleted succesfully" })
})

module.exports = app