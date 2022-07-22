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

module.exports = app