const express = require('express')
const router = express.Router()

const {search} = require('../controllers')
router.get('/search', search.searchMovie)
module.exports = router