const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://blooming-island-88026.herokuapp.com/';
}

/* GET 'home' page */

const _renderHomepage = function (req, res, responseBody) {
    res.render('homePage', {
        homePageHeader: {
            level: 'Intermediate',
            tagline: 'If you have mastered the basics in your pole dance journey, check out these intermeiate spins and moves. See the difficulty level, the muscle groups engaged and tips on how to improve strength and flexibility off the pole'
        },
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


//Change layout of data to get data from API
//there should be a qs parameter?
const _renderTrickInfo = function (req, res, responseBody) {
    res.render('trickInfo', {
        pageHeader: {
            name: ['Ballerina', 'Brass Monkey', 'Superman', 'Shoulder Mount', 'Butterfly', 'Cupid', 'Ayesha', 'Anastasia Frog', 'Genie', 'Flatline Scorpio', 'Hood Ornament', 'Jasmine'],
            title: ['summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary', 'summary']
        },
        tricks: [{
            instruction: 'Standing next to the pole, wrap your inside leg around the pole so it touches your thigh and calf. Leave a gap between the pole and your knee pit. Bring your chest and hands around the pole and lean into the pole. Wrap your inside hand around the pole between the thigh and calf, inside the gap you left open. Bring the outside hand up high above your head in a twisted grip, utilizing the Push - Pull method. With your outside leg, you can push off from the floor either forwards or backwards. The outside leg can either extend, bend, or swing in front of your other calf.',
            muscle_groups: ['Biceps', 'Latissimus Dorsi', 'Triceps', 'Pectoralis Major', 'Rectus Abdominis', 'Gluteus Maximus'],
            conditioning: [],
            image: '/images/ballerina.jpg'
        }, {
            instruction: 'Begin in the Shoulder Mount with a cup grip. Invert in the Shoulder Mount and transport the legs up and together on the opposite side of the shoulder that is on the pole. Wrap the inside leg in front of the pole transitioning into a knee pit grip. Once the knee pit grip is set, engage the hamstrings and glutes of gripping leg. Keep the core engaged and slide the hands down the pole into an inverted strong grip.',
            muscle_groups: ['Biceps', 'Latissimus Dorsi', 'Triceps', 'Pectoralis Major', 'Rectus Abdominis', 'Gluteus Maximus'],
            conditioning: [],
            image: '/images/brass_monkey.jpg'
        }, {
            instruction: 'Basic Invert and hook the outside leg on the pole, keep your hand on the pole, let the other leg sink down. Place the inside hand near your chest, and push your body out and up. Release your upper hand and grip the pole above the hooked leg. Bring the knee of your hooked leg towards your chest. Rotate your body so that your hips will face down, and bring the free leg around the pole to grip with the inner thigh on the opposite side. ',
            muscle_groups: ['Lumbar', 'Latissimus Dorsi', 'Trapezius', 'Gluteus Maximus', 'Gluteus Medius', 'Hamstring'],
            conditioning: [],
            image: '/images/superman.jpg'
        }, {
            instruction: 'Lean back, press your shoulder against the pole, and look upwards.  As you get into this position, cup grip the pole.  As you grip the pole, press your elbows together. Tuck your legs in as you lift your body up. Stretch and straighten your legs, pull your butt up, and spread your legs into a V position. This is the shoulder mount V position. To exit, tuck your legs back in and move back downward.',
            muscle_groups: ['Biceps', 'Latissimus Dorsi', 'Triceps', 'Pectoralis Major', 'Rectus Abdominis', 'Gluteus Maximus'],
            conditioning: [],
            image: '/images/shoulder_mount.jpg'
        }, {
            instruction: 'Stand with your strong side closest to the pole. Go into an invert and hook your weak leg over the pole at the knee. Keep your weak arm on the pole where it is and place your strong arm low on the pole keeping it relatively straight. Move your strong leg away from the pole behind you and bend it at the knee. From this Butterfly position straighten out your strong leg. Slowly unhook your weak leg and straighten it, keeping contact with the pole by the ankle and foot. Hold this pose.',
            muscle_groups: ['Biceps', 'Latissimus Dorsi', 'Triceps', 'Pectoralis Major', 'Rectus Abdominis', 'Gluteus Maximus'],
            conditioning: [],
            image: '/images/butterfly.jpg'
        }, {
            instruction: 'Hook your leg on the pole. When hooking your leg, make sure your leg is straightened out, to create a better grip behind the knee and on the pole. Once your leg is hooked on the pole, push your hips forward and your ankle moves toward your butt. Keep your knee aligned with your hip. Grab pole with your hand(s). Lift your other leg up to the pole and push your body up. Once in position, let go of your bottom hand and lean out. Position your hips forward to balance your body and let go of your other hand. To exit out of this position, grab pole with both hands and come down.',
            muscle_groups: ['Quadriceps', 'Hamstrings', 'Hip Flexors'],
            conditioning: [],
            image: '/images/cupid.jpg'
        }, {
            instruction: 'Start off by doing a v-invert. Lift your legs up and cross grip them on the pole to position yourself to an inverted crucifix pole move. Reposition your lower arm so that your forearm is pushing against the pole. When you are comfortable with your forearm grip, slide down your leg on the same side of your bottom arm to position your ankle against the pole. This will give your body balance as you extend your leg down. Once you\'ve your body\'s balance, extend your other leg down. Push it towards your shoulder. As you extend your leg, keep pushing your forearm against the pole. Release your ankle from the pole and extend your leg outwards to position yourself into an ayesha.',
            muscle_groups: ['Rotator Cuff', 'Deltoid', 'Tricep', 'Pectoralis Major', 'Trapezius', 'Latissimus Dorsi', 'Rectus Abdominis'],
            conditioning: [],
            image: '/images/ayesha.jpg'
        }, {
            instruction: 'Start on the pole from a Genie. Take the top leg off and bring it over your bottom hand. Tuck the crossed foot behind the pole. Point the toes. Turn the chest down to the floor and look away from the pole, extending the neck and pushing the chest out.',
            muscle_groups: ['Rotator Cuff', 'Hamstrings', 'Quadriceps', 'Hip Flexors', 'Triceps', 'Pectoralis Major'],
            conditioning: [],
            image: '/images/anastasia_frog.jpg'
        }, {
            instruction: 'Take your inside leg and hook it onto the pole, higher than hip level. Bring your inside hand on top and outside hand on bottom in a split grip. Lean your chest down towards the pole. Check to make sure that your hands are an equal distance apart from your pelvis. Bring the outside leg off the floor and around the front of the pole, hooking it on. Let go of inside hand and extend own with torso.',
            muscle_groups: ['Gluteus Maximus', 'Hamstrings', 'Quadriceps', 'Hip Flexors', 'Trapezius', 'Triceps', 'Pectoralis Major'],
            conditioning: [],
            image: '/images/genie.jpg'
        }, {
            instruction: 'Get the pole firmly positioned in the side of your torso between the bottom of your ribs and your pelvis. Bring your inside leg in towards your body, aim to get your knee as close to your chest as you can. This will make it easier to then position your leg around the pole. Push your outside leg down to get it parallel with the floor, and keep your knee facing upwards.',
            muscle_groups: ['Gluteus Maximus', 'Hamstrings', 'Quadriceps', 'Trapezius', 'Triceps', 'Pectoralis Major'],
            conditioning: [],
            image: '/images/flatline_scorpio.jpg'
        }, {
            instruction: 'Inside forearm 90-degree angle on pole. Hook inside leg around the knee in front of pole. Place outside arm higher up the pole than the inside arm. Wrap outside leg behind pole, holding at the ankle.',
            muscle_groups: ['Gluteus Maximus', 'Hamstrings', 'Quadriceps', 'Hip Flexors', 'Trapezius', 'Triceps', 'Pectoralis Major'],
            conditioning: [],
            image: '/images/hood_ornament.jpg'
        }, {
            instruction: 'Start next to the pole and take your inside leg and hook it onto the pole, a little higher than hip level. Be sure to squeeze the foot back towards the bum. Bring your inside hand on top and outside hand on bottom in a split grip. Lean your chest down towards the pole. Check to make sure that your hands are an equal distance apart from your pelvis. Bring the outside leg off the floor and around the back of the pole. Simultaneously, kick that foot up towards your face. For the advanced version of this move, bring your top hand off the pole and extend it, elbow loosened, over the head. Push your chest out hard.',
            muscle_groups: ['Hamstrings', 'Quadriceps', 'Hip Flexors', 'Trapezius', 'Triceps', 'Pectoralis Major'],
            conditioning: [],
            image: '/images/jasmine.jpg'
        }]
    });
};

const trickInfo = function (req, res) {
    const path = '/api/trick/:trickid';
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