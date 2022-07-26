const express = require("express")

const app = express()

app.get("/", (req, res) => {

    let categories = [
        { id: 1, name: "beauté" },
        { id: 2, name: "vetement" }
    ]

    res.send(categories)

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
    console.log(data);
    res.send({ message: "category added succesfully" })
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