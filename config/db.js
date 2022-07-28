<<<<<<< HEAD
const mongoose = require('mongoose');
const DB_Name = "ecom-fidel"
mongoose.connect(`mongodb://localhost:27017/${DB_Name}`)
.then (() => {console.log(`🟢 DB started ! `)})
.catch(() => {console.log(`🔴 error connexion to database !`) })
=======
const mongoose = require("mongoose")

const DB_NAME = "ecom-fidel"

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
    .then(() => { console.log(`🟢 database started !`) })
    .catch(() => { console.log(`🔴 error connexion to database !`) })

>>>>>>> 080b8fdf65906980e0e8eda9a60ec9936d53ce4b
