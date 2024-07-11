const  express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'Attendees';


//  middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));
//  connect to the db
require ('./Config/config')(DB)
// connect the routes
require('./Routes/Attendee_routes')(app)

require('./Routes/counselling_routes')(app)

require('./Routes/Admin_Routes')(app)

// Start the server
app.listen(PORT, () => console.log(`>> server up on ${PORT}`));