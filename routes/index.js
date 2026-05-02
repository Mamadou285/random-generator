var express = require('express');
var router = express.Router();

var data = require('../data/data.json');

router.get('/', function (req, res, next) {
  // get the list of items from data.json
  var items = data.items;

  // pick a random number from the list
  var randomIndex = Math.floor(Math.random() * items.length);

  // get one random item
  var randomItem = items[randomIndex];

  // send the random item to the page
  res.render('index', {
    title: randomItem.title,
    message: randomItem.message
  });
});

module.exports = router;
