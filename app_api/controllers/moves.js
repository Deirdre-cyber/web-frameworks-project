const mongoose = require('mongoose');
const Move = mongoose.model('Moves');

const movesListAll = function (req, res) {
  Move.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};


//resolve issue
const trickReadOne = function (req, res) {
  if (req.params && req.params.name) {
    Move
      .find(req.params.name)
      .exec((err, move) => {
        if (!move) {
          res
            .status(404)
            .json({
              "message": "moveid not found"
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
          .json(move);
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No moveid in request"
      });
      console.log('Finding move details', req.params.name);
  }
};


module.exports = {
  movesListAll,
  trickReadOne
}