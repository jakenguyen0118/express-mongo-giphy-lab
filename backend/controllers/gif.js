const express = require('express')
const Fruit = require('../../../express-mongoose-crud/student_examples/fruits/models/Fruit')
const router = express.Router()
const mongoose = require('../db/connection')
const Gif = require('../models/gif')
const db = mongoose.connection

router.get('/', async (req, res) => {
    const allGifs = await Gif.find({})
    res.json({status: 200, data: allGifs})
})

router.post('/', async (req, res) => {
    console.log('this route gets hit', req.body)
    const gif = await Gif.create(req.body)
    res.json({status: 200, data: gif})
})

router.put('/:gifId', async (req, res) => {
    const gif = await Gif.findByIdAndUpdate(req.params.gifId, req.body, {new: true})
    res.json({status: 200, msg: 'item updated', data: gif})
})

router.delete('/:gifId', async (req, res) => {
    const gif = await Gif.findByIdAndDelete(req.params.gifId)
    res.json({status: 200, msg: 'item deleted', data: gif})
})

module.exports = router