const express = require('express');
const router = express.Router();

const ctrlMoves = require('../controllers/moves'); 
const ctrlUsers = require('../controllers/users');

/* Data pages */
router.get('/', ctrlMoves.homePage);
router.get('/trick', ctrlMoves.trickInfo);

/* Other pages */
router.get('/register', ctrlUsers.register);
router.get('/login', ctrlUsers.login);
router.get('/login/favourites', ctrlUsers.favourites);

module.exports = router;