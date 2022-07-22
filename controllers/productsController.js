const express = require("express")

const app = express()

app.get("/", (req, res) => {

    let products = [
        { id: 1, name: "jus" },
        { id: 2, name: "cake" } ,
        {id: 3 , name:"eau"} ,
        {id:4 , name:"shonpoing"}
    ]

    res.send(products)

})

app.get("/:id", (req, res) => {

    let productId = req.params.id

    let products = [
        { id: 1, name: "jus" },
        { id: 2, name: "cake" } ,
        {id: 3 , name:"eau"} ,
        {id:4 , name:"shonpoing"}
    ]

    let product = products.find(c => c.id == productId)

    res.send(product)

})


app.post("/", (req, res) => {
    let data = req.body
    console.log(data);
    res.send({ message: "product added succesfully" })
})


app.patch("/:id", (req, res) => {
    let productId = req.params.id
    let data = req.body
    console.log(productId);
    console.log(data);
    res.send({ message: "product updated succesfully" })
})

app.delete("/:id", (req, res) => {
    let productId = req.params.id
    console.log(productId);
    res.send({ message: "product deleted succesfully" })
})
module.exports = app