var express = require('express');
var router = express.Router();

var helpers = require('./helper');

router
    .route('/:id')
    .get(helpers.get)

module.exports = router;