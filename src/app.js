
const express = require('express')
const cors = require('cors')

const app = express()

const geneticDiseasesRouter = require('./genetic-diseases/genetic-diseases.route')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/v1/', geneticDiseasesRouter)



module.exports = app