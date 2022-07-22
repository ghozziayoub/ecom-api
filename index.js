// IMPORT PACKAGES
const express = require("express")

// IMPORT CONTROLLERS
const categoriesController = require("./controllers/categoriesController")

const app = express()

const port = 3001

app.use(express.json())

// ROUTING
app.use("/categories", categoriesController)
app.use("/products", productsController)


// RUN SERVER
app.listen(port, () => console.log(`🟢 server started on port ${port}`))