const attendeeCounsel = require('../Controllers/counselling_controllers');

module.exports = (app) =>{
    app.get('/api/attendees/Counselling', attendeeCounsel.findAll);
    app.post('/api/attendees/Counselling', attendeeCounsel.create);
    app.get('/api/attendees/Counselling/:id', attendeeCounsel.findOne);
    app.put('/api/attendees/Counselling/:id', attendeeCounsel.update);
    app.delete('/api/attendees/Counselling/:id', attendeeCounsel.delete);
}