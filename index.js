const express = require("express")

const app = express()

const port = 3001

// p1 : objet : Request => methodes t5alina nrécupériw des données eli jewna mel front
// p2 : objet : Response => methodes y5aliwna nab3thou des données lel front
app.get("/firstname/:abc/lastname/:xyz", (req, res) => {

    let myName = req.params.abc
    let myLastname = req.params.xyz

    res.send({ name: `${myName} ${myLastname}` }) // return name
})

app.listen(port, () => console.log(`🟢 server started on port ${port}`))