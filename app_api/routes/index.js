const express = require('express');
const router = express.Router();
const ctrlMoves = require('../controllers/moves');
const ctrlUsers = require('../controllers/users');

/* Data pages */
router
    .route('/')
    .get(ctrlMoves.movesListAll); //working


router
    .route('/trick/:trickid')
    .get(ctrlMoves.trickReadOne); //working

/* User pages */
router
    .route('/register')
    .post(ctrlUsers.registerUser); //working

router
    .route('/login/:loginid')
    .get(ctrlUsers.loginUser); //working - needs to be post

router
    .route('/login/:loginid/favourites')
    .get(ctrlUsers.favouritesRead) //working
    .put(ctrlUsers.favouritesAddOne); //working but move currently hardcoded - need function to add

router
    .route('/login/:loginid/favourites/:favouriteid')
    .put(ctrlUsers.favouriteDeleteOne); //working but loginid currently hardcoded - need function to add

module.exports = router;
