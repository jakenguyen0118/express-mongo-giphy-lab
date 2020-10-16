const mongoose = require('./connection')
const Gif = require('../models/gif')
const gifData = require('../../frontend/seed.json')

const db = mongoose.connection

Gif.deleteMany({}).then(() => {
    Gif.insertMany(gifData).then(fruit => {
        console.log('fruit', fruit)
        db.close()
    })
})