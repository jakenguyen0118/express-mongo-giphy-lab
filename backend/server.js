require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'you have hit the default route...nothing to see here',
	})
})

const gifController = require('./controllers/gif')
app.use('/gifs', gifController)

app.listen(PORT, () => {
    console.log(`listening in on port: ${PORT}`)
})