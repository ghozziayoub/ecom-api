const express = require("express")

const app = express()

app.get("/", (req, res) => {
  
    let categories = [
        { id: 1, name: "beauté" },
        { id: 2, name: "vetement" }
    ]

    res.send(categories)

})


module.exports = app