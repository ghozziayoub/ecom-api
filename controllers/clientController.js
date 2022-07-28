const express = require("express")

const Client = require("./../models/clients")

const app = express()

app.get("/", async (req, res) => {
    try {
        let clients = await Client.find()
        res.status(200).send(clients)
    } catch (e) {
        res.status(400).send({ message: "error fetching clients" })
    }
})

app.get("/:id", async (req, res) => {

    try {

        let clientId = req.params.id
        let client = await Client.findOne({ _id: clientId })

        if (client) {
            res.status(200).send(client)
        }
        else {
            res.status(404).send({ message: "client not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching client" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let client = new Client({
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            address: data.address,
            email: data.email,
            password: data.password,
         

        })

        await client.save()

        res.status(201).send({ message: "client added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "client not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let clientId = req.params.id
        let data = req.body
        let client = await Client.findOneAndUpdate({ _id: clientId }, data)

        if (client) {
            res.status(200).send({ message: "client updated succesfully" })
        }
        else {
            res.status(404).send({ message: "client not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching client" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let clientId = req.params.id

        let client = await Client.findOneAndDelete({ _id: clientId })

        if (client) {
            res.status(200).send({ message: "client deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "client not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching client" })
    }

})

module.exports = app