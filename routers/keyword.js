const express = require('express')

const router = express.Router()

const { keywordController } = require('../../gkeywordv2/controllers/keyword')
router.post('/keyword', keywordController)

module.exports = router