var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets/new', ticketsCtrl.create);
router.delete('/flights/:id/:id', ticketsCtrl.delete);

module.exports = router;