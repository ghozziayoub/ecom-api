const express = require("express")

const app = express()

app.get("/", (req, res) => {

    let products = [
        { id: 1, name: "T-shirt", price: "119.000" },
        { id: 2, name: "Nail polish", price: "7.000" },
        { id: 3, name: "Parfume", price: "439.000" },
        { id: 4, name: "Sun-screen", price: "89.900" },
        { id: 5, name: "Swimwear", price: "157.900" }

    ]


    res.send(products)

})

app.get("/:id", (req, res) => {

    let productId = req.params.id

    let products = [
        { id: 1, name: "T-shirt", price: "119.000" },
        { id: 2, name: "Nail polish", price: "7.000" },
        { id: 3, name: "Parfume", price: "439.000" },
        { id: 4, name: "Sun-screen", price: "89.900" },
        { id: 5, name: "Swimwear", price: "157.900" }

    ]

    let product = products.find(c => c.id == productId)

    res.send(`The ${product.name} is added to cart with a price : ${product.price}DT`)

})


module.exports = app