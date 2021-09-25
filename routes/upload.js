
const express = require("express");
const router = express.Router();
const middleware = require("../middleware/upload");
const postsController = require('../controllers/candy-crud')


router.get('/', postsController.getPics)
router.post(
    "/addimg",
    middleware.upload.single("image"),
    postsController.addPic
  );

module.exports = router;