const express = require("express")

const app = express()

app.get("/", (req, res) => {
    let Subcategories = [
        {id:1,name:"Robes"},
        {id:2,name:"tee-shirts"},
        {id:3,name:"Chemises"},
        {id:4,name:"jeans"},
        {id:5,name:"jupes"}
        
    ]
    res.send(Subcategories)
})

app.get("/:id", (req, res) => {
    let SubcategoryId = req.params.id

    let Subcategories = [
        {id:1,name:"Robes"},
        {id:2,name:"tee-shirts"},
        {id:3,name:"Chemises"},
        {id:4,name:"jeans"},
        {id:5,name:"jupes"}
    ]
    let Subcategory = Subcategories.find(c => c.id == SubcategoryId)
    res.send(Subcategory)
})

app.post("/",(req,res)=>{
    let data= req.body
    console.log(data);
    res.send({message:"Subcategory added succesfully"})
})

app.patch("/:id", (req, res) =>{
    let SubcategoryId = req.params.id
    let data = req.body
    console.log(SubcategoryId);
    console.log(data);
    res.send({message:"Subcategory updated succesfully"})

})

app.delete("/:id", (req, res) => {
    let SubcategoryId = req.params.id
    console.log(SubcategoryId);
    res.send({ message: "Subcategory deleted succesfully" })
})

module.exports = app