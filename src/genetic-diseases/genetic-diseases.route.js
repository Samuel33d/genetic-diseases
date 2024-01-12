const express = require('express')
const router = express.Router()
const { findAll, findOne, createDisease, updateDisease, deleteDisease } = require('./genetic-diseases.controller')

router.get('/genetic-diseases', findAll)
router.get('/genetic-diseases/:id', findOne)
router.post('/genetic-diseases', createDisease)
router.patch('/genetic-diseases/:id', updateDisease)
router.delete('/genetic-diseases/:id', deleteDisease)


module.exports = router