const mongoose = require('mongoose');
const Move = mongoose.model('Moves');

/* GET all moves */
const movesListAll = function (req, res) {
  Move.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};


/* GET a move by the id */

const trickReadOne = function (req, res) {
  
  if (req.params && req.params.trickid) {
    Move
      .findById(req.params.trickid)
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
  }
};


module.exports = {
  movesListAll,
  trickReadOne
}