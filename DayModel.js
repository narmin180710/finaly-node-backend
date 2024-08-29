const mongoose = require('mongoose')


const daySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Day', daySchema)