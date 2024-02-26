const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');


router.get('/tin-tuc',newsController.show);
router.get('/', newsController.index);

module.exports = router;