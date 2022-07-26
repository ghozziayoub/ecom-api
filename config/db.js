const mongoose = require("mongoose")

const DB_NAME = "ecom-fidel"

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
    .then(() => { console.log(`🟢 database started !`) })
    .catch(() => { console.log(`🔴 error connexion to database !`) })

