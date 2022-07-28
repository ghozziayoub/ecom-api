// IMPORT PACKAGES
const express = require("express")

// IMPORT CONTROLLERS
const categoriesController = require("./controllers/categoriesController")
const productsController = require("./controllers/productsController")
const subcategoriesController = require("./controllers/subcategoriesController")
const ordersController = require("./controllers/ordersController")
const messagesController = require("./controllers/messagesController")
const sellersController = require("./controllers/sellersController")

// IMPORT DB
require("./config/db")

const app = express()

const port = 3001

app.use(express.json())

// ROUTING
app.use("/categories", categoriesController)
app.use("/products", productsController)
app.use("/orders", ordersController)
app.use("/subcategories", subcategoriesController)
app.use("/messagesController", messagesController)
app.use("/sellers", sellersController)
// RUN SERVER
app.listen(port, () => console.log(`🟢 server started on port ${port}`))