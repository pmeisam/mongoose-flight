var express = require('express');
var router = express.Router();
var flightCtrl = require('../controllers/flights');

/* GET users listing. */

router.get('/', flightCtrl.index );
router.get('/new', flightCtrl.new);
router.get('/:id', flightCtrl.show)
router.post('/', flightCtrl.create);


module.exports = router;
