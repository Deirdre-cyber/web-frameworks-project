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
    Favourite.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

const favouritesAddOne = function (req, res) {
    Favourite.updateOne(
        { _id: "6353e0eb1d591e49c07fef35" },//variable for logged in user
        { $addToSet: { 
            favourites: "Ballerina"
        } },
        function (err, favourite) {
            if (err) {
                res
                    .status(404)
                    .json({
                        err,
                        "message": "Favourite not added"
                    });
            } else {
                res
                    .status(201)
                    .json({
                        favourite,
                        "message": "Favourite added successfully"
                    });
            }
        }
    );
};

const favouriteDeleteOne = function (req, res) {
    if (req.params && req.params.favouriteid) {
        Favourite.updateOne(
            { _id: "6353e0eb1d591e49c07fef35" },//variable for logged in user
            { $pull: { 
                favourites: "Ballerina"
            } },
            function (err, favourite) {
                if (err) {
                    res
                        .status(404)
                        .json({
                            err,
                            "message": "Favourite not deleted"
                        });
                } else {
                    res
                        .status(201)
                        .json({
                            favourite,
                            "message": "Favourite deleted successfully"
                        });
                }
            }
        );
    } else {
        res
            .status(404)
            .json({
                "message": "No favouriteid in request"
            });
    }
};

module.exports = {
    registerUser,
    loginUser,
    favouritesRead,
    favouritesAddOne,
    favouriteDeleteOne
}