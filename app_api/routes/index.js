const express = require('express');
const router = express.Router();
const ctrlMoves = require('../controllers/moves');
const ctrlUsers = require('../controllers/users');

/* Data pages */
router
    .route('/')
    .get(ctrlMoves.movesListAll);

router
    .route('/trick/:trickid')
    .get(ctrlMoves.trickReadOne);

/* User pages */
router
    .route('/register')
    .post(ctrlUsers.registerUser);

router
    .route('/login/:loginid')
    .get(ctrlUsers.loginUser);

router
    .route('/login/:loginid/favourites')
    .get(ctrlUsers.favouritesRead)
    .post(ctrlUsers.favouritesAddOne);

router
    .route('/login/:loginid/favourites/:favouriteid')
    .delete(ctrlUsers.favouriteDeleteOne);

module.exports = router;