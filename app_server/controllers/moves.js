const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://blooming-island-88026.herokuapp.com';
}


/* GET 'home' page */

const _renderHomepage = function (req, res, responseBody) {
    
    res.render('homePage', {
        homePageHeader: {
            level: 'Intermediate',
            tagline: 'If you have mastered the basics in your pole dance journey, check out these intermeiate spins and moves. See the difficulty level, the muscle groups engaged and tips on how to improve strength and flexibility off the pole'
        },
        user: 'user',
        moveDetails: responseBody
    });
};

const homePage = function (req, res) {
    const path = '/api/';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {},
    };
    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    }
    );
};


/* GET 'trickInfo' page */
const _renderTrickInfo = function (req, res, moveInfo) {
    res.render('trickInfo', {
        pageHeader: {
            name: moveInfo.name,
            title: moveInfo.summary,
        },
        tricks: moveInfo

    });
};

const trickInfo = function (req, res) {
    const path = '/api/trick/' + req.params.trickid;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}

    };
    request(requestOptions, (err, response, body) => {
        
        _renderTrickInfo(req, res, body);
    }
    );
};

module.exports = {
    homePage,
    trickInfo
};