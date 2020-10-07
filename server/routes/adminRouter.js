const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json('I Love 🚀'));

module.exports = router