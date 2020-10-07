const express = require('express');
const articles = require('../controllers/articleController');
const index = require('../controllers/indexController');
const router = express.Router();

router.get('/', index);
router.get('/articles',  articles.show);
router.get('/articles/:id',  articles.get);

module.exports = router