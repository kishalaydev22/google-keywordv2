const express = require('express')

const router = express.Router()

const { keywordController } = require('../controllers/keyword')
router.post('/keyword', keywordController)

module.exports = router