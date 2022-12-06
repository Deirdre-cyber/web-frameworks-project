const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://blooming-island-88026.herokuapp.com';
}
/* GET 'Registration' page */
const register = function (req, res) {
    res.render('register', {
        registerPageHeader: {
            title: 'Register',
            greeting: 'Welcome',
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
};

/* GET 'Login' page */
const login = function (req, res) {
    res.render('login', { 
        loginPageHeader: {
          title: 'Login',
          greeting: 'Welcome back',
          icon: '/images/pole_icon1.jfif'
        },
        loginForm: {
            text: 'Don\'t have an account?',
            altButton: 'Log in',
            button: 'Register'
        }        
    });
};

/* GET 'Favourite' page */
const _renderFavourites = function (req, res, responseBody) {
    res.render('favourites', {
        moveDetails: responseBody
    }
        );
};

const favourites = function (req, res) {
    const path = '/api/login/' + req.params.loginid + '/favourites';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {},
    };
    request(requestOptions, (err, response, body) => {
        _renderFavourites(req, res, body);
    }
    );
};

module.exports = {
    register,
    login,
    favourites
};