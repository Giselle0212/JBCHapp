const mongoose = require("mongoose");

module.exports = (mission24) => {
    mongoose.connect(`mongodb://localhost/${mission24}`)
    .then(() => console.log(`CONNECTED TO ${mission24}`))
    .catch(err => console.log(`Can Not connect to ${mission24}`, err))
}