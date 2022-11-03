const mongoose = require('mongoose');
const Member = mongoose.model('Members');
const Favourite = mongoose.model('Favourites');

const registerUser = function (req, res) {
    Member.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        level: req.body.level
    }, (err, member) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(member);
        }
    });
};

const loginUser = function (req, res) {
    if (req.params && req.params.loginid) {
        Member
            .findById(req.params.loginid)
            .exec((err, login) => {
                if (!login) {
                    res
                        .status(404)
                        .json({
                            "message": "loginid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(login);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No loginid in request"
            });
    }
};

const favouritesRead = function (req, res) {
    res
        .status(200)
        .json({ "status": "success" });
};

const favouritesAddOne = function (req, res) {
    Favourite.create({
        name: req.body.name,
        summary: req.body.summary,
        difficulty: req.body.difficulty,
        image: req.body.image
    }, (err, favourite) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(favourite);
        }
    });
};

const favouriteDeleteOne = function (req, res) {
    res
        .status(200)
        .json({ "status": "success" });
};

module.exports = {
    registerUser,
    loginUser,
    favouritesRead,
    favouritesAddOne,
    favouriteDeleteOne
}