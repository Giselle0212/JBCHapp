const mongoose = require('mongoose')
const { type } = require('os')
const { stringify } = require('querystring')


const AttendeeSchema = new mongoose.Schema({
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

    iglesia:{
        type: String,
        required: [true, '{PATH} de estar presente.']

    },
    edad:{
        type: Number,
        required: [true, '{PATH} de estar presente.']

    },
    invitado:{
        type:Boolean,
        default:false
    }

}, {timestamps:true})

const Attendee = mongoose.model('Attendee', AttendeeSchema)
module.exports = Attendee;