const express = require("express")

const Seller = require("./../models/seller")

const app = express()

app.get("/", async (req, res) => {
    try {
        let sellers = await Seller.find()
        res.status(200).send(sellers)
    } catch (e) {
        res.status(400).send({ message: "error fetching sellers" })
    }
})

app.get("/:id", async (req, res) => {

    try {

        let sellerId = req.params.id
        let seller = await Seller.findOne({ _id: sellerId })

        if (seller) {
            res.status(200).send(seller)
        }
        else {
            res.status(404).send({ message: "seller not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching seller" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let seller = new Seller({
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            address: data.address,
            email: data.email,
            password: data.password,
            shopName: data.shopName, 
            logoShop: data.logoShop,

        })

        await seller.save()

        res.status(201).send({ message: "seller added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "seller not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let sellerId = req.params.id
        let data = req.body
        let seller = await Seller.findOneAndUpdate({ _id: sellerId }, data)

        if (seller) {
            res.status(200).send({ message: "seller updated succesfully" })
        }
        else {
            res.status(404).send({ message: "seller not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching seller" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let sellerId = req.params.id

        let seller = await Seller.findOneAndDelete({ _id: sellerId })

        if (seller) {
            res.status(200).send({ message: "seller deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "seller not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching seller" })
    }

})

module.exports = app