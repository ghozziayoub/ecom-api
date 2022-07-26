const express = require("express")

const app = express()

app.get("/", (req, res) => {
    let messages = "Black friday Sale"
    res.send(messages)
})

app.get("/:id", (req, res) => {
    let messages = "Black friday Sale"
    res.send(messages)
})

app.post("/", (req, res) => {
    let message2 = req.body
    console.log(message2);
    res.send(messages)
})

app.patch("/:id", (req, res) => {
    let message3 = req.params
    let data = req.body
    console.log(message3);
    console.log(data);
    res.send(messages)
})

app.delete("/:id", (req, res) => {
    let message4 = req.params
    console.log(message4);
    res.send(messages + { message: " It Ended !" })
})

module.exports = app