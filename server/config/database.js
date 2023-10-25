const mongoose = require('mongoose')
require('dotenv').config()

exports.dbConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017/localHOST", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("Db connected success ✅")).catch((err)=>console.error(err))
}