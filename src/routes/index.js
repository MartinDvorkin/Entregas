var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */
router.get('/', userController.index)
router.get('/register', userController.view)
router.post('/register', userController.show)

module.exports = router;
