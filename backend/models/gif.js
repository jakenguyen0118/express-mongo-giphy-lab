const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const gifSchema = new Schema(
    {
        name: String,
        url: String,
    }
)

const Gif = mongoose.model('Gif', gifSchema)

module.exports = Gif