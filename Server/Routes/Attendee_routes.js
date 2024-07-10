const Attendee = require('../Controllers/Attendee_controller');

module.exports = (app) =>{
    app.get('/api/attendees', Attendee.findAll);
    app.post('/api/attendees', Attendee.create);
    app.get('/api/attendees/:id', Attendee.findOne);
    app.put('/api/attendees/:id', Attendee.update);
    app.delete('/api/attendees/:id', Attendee.delete);
}