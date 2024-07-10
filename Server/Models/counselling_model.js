const mongoose = require('mongoose')
const { type } = require('os')
const { stringify } = require('querystring')


const conuselAttendeeSchema =new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, '{PATH} de estar presente.'],
        minlength: [3, '{PATH} Debe tener al menos 3 caracteres.']
    },
    apellido:{
        type: String,
        required: [true, '{PATH} de estar presente.'],
        minlength: [3, '{PATH} Debe tener al menos 3 caracteres.']
    },
    predicador:{
        type: String,
        required: [true, '{PATH} de estar presente.']
    }
    
}, {timestamps:true})

const Counsel = mongoose.model('Counsel', conuselAttendeeSchema)
module.exports = Counsel;