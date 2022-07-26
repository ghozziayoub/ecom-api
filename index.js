
//IMPORT PACKAGES
const express = require("express")


//IMPORT CONTROLLERS
const categoriesController =  require("./controllers/categoriesController")
const messagesController =  require("./controllers/messagesController")


const app = express()

const port = 3001


app.use(express.json()) //autorise lilserveur ya9bel les données fel body eli jeyin f les requetes HTTP

// p1 : objet : Request => methodes t5alina nrécupériw des données eli jewna mel front
// p2 : objet : Response => methodes y5aliwna nab3thou des données lel front
app.get("/firstname/:abc/lastname/:xyz", (req, res) => {

    let myName = req.params.abc
    let myLastname = req.params.xyz

    res.send({ name: `${myName} ${myLastname}` }) // return name
})

app.patch("/test", (req,res) => {

    let data = req.body 
    console.log(data);
    res.send({message: "tested successfully"})
})

app.post("/test/:name", (req , res) => {
    let myName = req.params.name
    let data = req.body
    let mySecret = req.get("secret")
    console.log(myName);
    console.log(data);
    console.log(mySecret);

    res.send({message : "tested successfully"})

} )
//ROUTING
app.use("/categories" , categoriesController)
app.use("/messages" , messagesController)


//RUN SERVER
app.listen(port, () => console.log(`🟢 server started on port ${port}`))