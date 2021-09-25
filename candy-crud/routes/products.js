
var express = require('express');
var router = express.Router();
const middleware = require("../middleware/upload");

var prodsCtrl = require('../controllers/candy-crud')
var cartCtrl = require('../controllers/cart')

/* GET products page. */

router.get('/', prodsCtrl.showProds)

router.get('/products', cartCtrl.showCart)

router.post('/products', cartCtrl.giveItemToCart)

router.get('/pics', prodsCtrl.getPics)
router.post(
    "/addimg",
    middleware.upload.single("image"),
    prodsCtrl.addPic
  );


module.exports = router;
