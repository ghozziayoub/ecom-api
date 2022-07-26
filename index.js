// IMPORT PACKAGES
const express = require("express")

// IMPORT CONTROLLERS
const categoriesController = require("./controllers/categoriesController")
const productsController = require("./controllers/productsController")
const SubcategoriesController = require("./controllers/SubcategoriesController")

const app = express()

const port = 3001

app.use(express.json())

// ROUTING
app.use("/categories", categoriesController)
app.use("/products", productsController)
app.use("subcategories" , SubcategoriesController)


// RUN SERVER
app.listen(port, () => console.log(`🟢 server started on port ${port}`))