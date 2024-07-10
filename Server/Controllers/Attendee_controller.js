const Attendee = require('../Models/Attendee_model');

module.exports = {
    findAll: (req, res) =>{
        Attendee.find()
        .then(allDaAttendees => {
            res.json(allDaAttendees)
        })
        .catch(err => res.json(err))
    },
    create: (req, res) => {
        console.log(req.body)
        Attendee.create(req.body)
        .then(newAttendee => {
            console.log('server sucess')
            res.json(newAttendee)
        })
        .catch(err => {
            console.log("Server error")
            res.status(400).json(err)
        })
    },
    findOne: (req,res) => {
        Attendee.findById(req.params.id)
        .then(oneAttendee => res.json(oneAttendee))
        .catch(err => res.json(err))
    },
    update: (req,res) => {
        console.log("update ID:", req.params.id)
        console.log("req.body:", req.body)
        Attendee.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true })
        .then(updatedAttendee => res.json(updatedAttendee))
        .catch(err => res.json(err))
    },
    delete: (req,res) => {
        Attendee.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
}