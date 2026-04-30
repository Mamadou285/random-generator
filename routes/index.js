var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // 1. Read the data.json file
    // 2. Pick a random item from the data.json list
    // 3. Render the index.hbs template with the random item.

    res.render('index', {
        // your variables go here
    });
});

module.exports = router;
