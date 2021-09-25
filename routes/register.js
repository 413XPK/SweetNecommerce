var express = require('express');
var router = express.Router();

var regCtrl = require('../controllers/candy-crud')



router.get('/', regCtrl.showUsers)

router.post('/register', regCtrl.handleUserForm)

router.get('/remove/:deleteRegisterIdNumber', regCtrl.removeReg);

router.get('/editReg/:editIdNumber', regCtrl.editRegi);

router.post('/editReg/:editIdNumber', regCtrl.editRegAndUpdate);

module.exports = router;
