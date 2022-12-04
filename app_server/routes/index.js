const express = require('express');
var passport = require('passport');
const Member = require('../../app_api/models/members');
const router = express.Router();

//app_api\models\members.js

const ctrlMoves = require('../controllers/moves');
const ctrlUsers = require('../controllers/users');

/* Data pages */
router.get('/', ctrlMoves.homePage);

router.get('/trick/:trickid', ctrlMoves.trickInfo);

/* User pages */
router.get('/register', ctrlUsers.register);

router.post('/register', function (req, res) {
    Member.register(new Member(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.username,
            level: req.body.level,
            username: req.body.username
        }),
        req.body.password,
        (err, member) => {
            if (err) {
                return res.render('register', {
                    registerPageHeader: {
                        title: 'Register',
                        greeting: 'There was a problem registering your account\n' + err,
                        icon: '/images/pole_icon1.jfif'
                    },
                    registerForm: {
                        text: 'Already have an account?',
                        altButton: 'Register',
                        button: 'Log in',
                        levelHeading: 'Choose your experience:',
                        levels: [{
                            low: 'Beginner',
                            med: 'Intermediate',
                            high: 'Advanced'
                        }]
                    }
                });
            }

            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
});

//LOGIN
router.get('/login', ctrlUsers.login);
router.get('/login', (req, res) => {
    res.render('login',
        {
            user: req.user, error: req.flash('error')
        }
    );
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

//LOGOUT
router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

//GET Favourites
router.get('/login/:loginid/favourites', ctrlUsers.favourites);


module.exports = router;