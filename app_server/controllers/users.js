const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://blooming-island-88026.herokuapp.com/';
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

const favourites = function (req, res) {
    res.render('favourites', {
        moveDetails: [{
            name: 'Ballerina',
            summary: 'This trick reminds me of a ballerina twirling in a music box. It will either get you feeling like a star or seeing stars in a dizzy hot mess.',
            difficulty: 1,
            image: '/images/ballerina.jpg'
        }, {
            name: 'Brass Monkey',
            summary: 'No bananas needed for this pole trick. Just a happy twist and a smile as you go around the pole with ease.',
            difficulty: 2,
            image: '/images/brass_monkey.jpg'
        }, {
            name: 'Superman',
            summary: 'What better way of showing your love for pole by embracing the hero in you, lift yourself up and showing your awesomeness with this intermediate pole move',
            difficulty: 1,
            image: '/images/superman.jpg'
        }]
    });
};

module.exports = {
    register,
    login,
    favourites
};