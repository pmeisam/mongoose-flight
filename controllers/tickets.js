var Ticket = require('../models/ticket');
var Flight = require('../models/flight');
module.exports = {
    new: newTicket,
    create
}
function create(req, res){
    Ticket.create({
        flight: req.params.id, 
        seat: req.body.seat, 
        price: req.body.price
    }, function(err, ticket){
        res.redirect(`/flights/${ticket.flight}`);
    });
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight});
    });
}