API = Function
Nom => METHODE + ROUTE
Traitement

URL : http://localhost:4200/admin/login
DNS : http://localhost:4200
ROUTE : /admin/login
PATH : admin/login

REST : Protocole
METHODE :         POST | PATCH | GET | DELETE
DATA : PARAMS   |  OP  |   OP  |  OP |   OP
       HEADER   |  OP  |   OP  |  OP |   OP
       BODY     |  OB  |   OB  |  X  |   X
         

FRONT -> API -> TRAITEMENT -> FRONT
------
// autorise lel serveur bch ye9bel des données fel body elli jeyin f les requettes HTTP
app.use(express.json())

// p1 : objet : Request => methodes t5alina nrécupériw des données eli jewna mel front
// p2 : objet : Response => methodes y5aliwna nab3thou des données lel front
app.get("/firstname/:abc/lastname/:xyz", (req, res) => {
    let myName = req.params.abc
    let myLastname = req.params.xyz
    res.send({ name: `${myName} ${myLastname}` }) // return name
})

app.patch("/test", (req, res) => {
    let data = req.body
    console.log(data);
    res.send({ message: "tested successfully" })
})

app.post("/test/:name", (req, res) => {

    let myName = req.params.name
    let data = req.body
    let mySecret = req.get("secret")

    console.log(myName);
    console.log(data);
    console.log(mySecret);

    let categories = [
        { id: 1, name: "beauté" },
        { id: 2, name: "vetement" }
    ]

    res.send(categories)

})