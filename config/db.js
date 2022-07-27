const mongoose = require('mongoose');
const DB_Name = "ecom-fidel"
mongoose.connect(`mongodb://localhost:27017/${DB_Name}`)
.then (() => {console.log(`🟢 DB started ! `)})
.catch(() => {console.log(`🔴 error connexion to database !`) })
