const express = require('express');
const router = express.Router();

const ctrlMoves = require('../controllers/moves'); 
const ctrlUsers = require('../controllers/users');

/* Data pages */
router.get('/', ctrlMoves.homePage);

router.get('/trick/:trickid', ctrlMoves.trickInfo);

/* User pages */
router.get('/register', ctrlUsers.register);

router.get('/login', ctrlUsers.login);

router.get('/login/:loginid/favourites', ctrlUsers.favourites);

module.exports = router;