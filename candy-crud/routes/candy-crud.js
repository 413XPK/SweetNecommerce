var express = require('express');
var router = express.Router();

const passport = require('passport');

var loginCtrl = require('../controllers/candy-crud')

router.get('/visitors', loginCtrl.index )

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

// router.get('/index', loginCtrl.showProdsMain)


// router.get('/main', loginCtrl.getPicsMain)


module.exports = router;
