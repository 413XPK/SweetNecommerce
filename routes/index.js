var express = require('express');
var router = express.Router();

const passport = require('passport');

// var displayCtrl = require('../controllers/candy-crud')


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/index', displayCtrl.showProdsMain)


// router.get('/main', displayCtrl.getPicsMain)

module.exports = router;
