const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/bookmyshow')
        console.log('Connected to Database')
    } catch (err){
        console.log(err)
    }
}

module.exports = connectDB