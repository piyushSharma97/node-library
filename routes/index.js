var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
//mongodb+srv://piyushsharma:sharmapiyush@cluster0.d47bw.mongodb.net/local_library?retryWrites=true&w=majority