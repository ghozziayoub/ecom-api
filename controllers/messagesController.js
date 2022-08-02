const express = require("express")

const Message = require("./../models/message")

const app = express()


app.get("/", async (req, res) => {

    try {
        let messages = await Message.find()
        res.status(200).send(messages)
    } catch (e) {
        res.status(400).send({ message: "error fetching messages" })
    }

})

app.get("/:id", async (req, res) => {

    try {

        let messageId = req.params.id
        let message = await Message.findOne({ _id: messageId })

        if (category) {
            res.status(200).send(message)
        }
        else {
            res.status(404).send({ message: "message not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching message" })
    }

})

app.post("/", async (req, res) => {

    try {
        let data = req.body

        let message = new Message({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            message: data.message,
            subject: data.subject

        })

        await message.save()

        res.status(201).send({ message: "message added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "message not saved " })
    }

})
app.patch("/:id", async (req, res) => {
    try {
        let messageId = req.params.id
        let data = req.body
        let message = await Message.findOneAndUpdate({ _id: messageId }, data)

        if (category) {
            res.status(200).send({ message: "message updated succesfully" })
        }
        else {
            res.status(404).send({ message: "message not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching message" })
    }


})


app.delete("/:id", async (req, res) => {
    try {
        let messageId = req.params.id

        let message = await Message.findOneAndDelete({ _id: messageId })

        if (category) {
            res.stat+us(200).send({ message: "message deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "message not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching message" })
    }

})

module.exports = app