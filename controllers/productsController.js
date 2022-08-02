const express = require("express")

const Product = require("./../models/product")

const app = express()

app.get("/", async (req, res) => {

    try {
        let products = await Product.find()
        res.status(200).send(products)
    } catch (e) {
        res.status(400).send({ message: "error fetching products" })
    }

})

app.get("/:id", async (req, res) => {

    try {

        let productId = req.params.id
        let product = await Product.findOne({ _id: productId })

        if (product) {
            res.status(200).send(product)
        }
        else {
            res.status(404).send({ message: "product not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching product" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let product = new Product({
            name: data.name,
            image: data.image,
            price: data.price,
            description: data.description,
            idSubCategory: data.idSubCategory,
            idCategory: data.idCategory

        })

        await product.save()

        res.status(201).send({ message: "product added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "product not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let productId = req.params.id
        let data = req.body
        let product = await Product.findOneAndUpdate({ _id: productId }, data)

        if (product) {
            res.status(200).send({ message: "product updated succesfully" })
        }
        else {
            res.status(404).send({ message: "product not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching product" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let productId = req.params.id

        let product = await Product.findOneAndDelete({ _id: productId })

        if (product) {
            res.status(200).send({ message: "product deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "product not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching product" })
    }

})

module.exports = app