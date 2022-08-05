const express = require("express")
const bcrypt = require("bcryptjs")

const User = require("../models/user")

const app = express()

app.get("/", async (req, res) => {
    try {
        let users = await User.find()
        res.status(200).send(users)
    } catch (e) {
        res.status(400).send({ message: "error fetching users" })
    }
})

app.get("/:id", async (req, res) => {

    try {

        let userId = req.params.id
        let user = await User.findOne({ _id: userId })

        if (user) {
            res.status(200).send(user)
        }
        else {
            res.status(404).send({ message: "user not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching user" })
    }

})

// register => add client / admin to database
app.post("/", async (req, res) => {


    try {
        let data = req.body
        // hashage du mot de passe 
        data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))

        let user = new User({
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            address: data.address,
            email: data.email,
            password: data.password, // nour&yasmine26!! => ae64f1a98e5q41a9z8e4f11v98eaq74rzdc9aqe57g4v98z
            // role : data.role => e cas ou bch nab3thou e role mel front | na7iw default mel model
        })

        await user.save()

        res.status(201).send({ message: "user added succesfully" })

    } catch (e) {
        res.status(400).send({ message: "user not saved " })
    }

})

app.patch("/:id", async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body
        let user = await User.findOneAndUpdate({ _id: userId }, data)

        if (user) {
            res.status(200).send({ message: "user updated succesfully" })
        }
        else {
            res.status(404).send({ message: "user not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching user" })
    }


})

app.delete("/:id", async (req, res) => {
    try {
        let userId = req.params.id

        let user = await User.findOneAndDelete({ _id: userId })

        if (user) {
            res.status(200).send({ message: "user deleted succesfully" })
        }
        else {
            res.status(404).send({ message: "user not found !" })
        }

    } catch (error) {
        res.status(400).send({ message: "error fetching user" })
    }

})

module.exports = app

