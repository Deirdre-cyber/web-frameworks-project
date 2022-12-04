const express = require('express');
var passport = require('passport');
const router = express.Router();

//app_api\models\members.js
const Member = require('../../app_api/models/members');
const ctrlMoves = require('../controllers/moves'); 
const ctrlUsers = require('../controllers/users');

/* Data pages */
router.get('/', ctrlMoves.homePage);

router.get('/trick/:trickid', ctrlMoves.trickInfo);

/* User pages */
router.get('/register', ctrlUsers.register);

router.post('/register', function(req, res) {
    Member.register(new Member({ 
        username : req.body.email }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

//LOGIN
router.get('/login', ctrlUsers.login);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

//LOGOUT
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//GET Favourites
router.get('/login/:loginid/favourites', ctrlUsers.favourites);


router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;