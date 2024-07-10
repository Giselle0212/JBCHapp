const attendeeCounsel = require('../Models/counselling_model');

module.exports = {
    findAll: (req, res) =>{
        attendeeCounsel.find()
        .then(allDaAttendeesDaCounsel => {
            res.json(allDaAttendeesDaCounsel)
        })
        .catch(err => res.json(err))
    },
    create: (req, res) => {
        console.log(req.body)
        attendeeCounsel.create(req.body)
        .then(newAttendeeCounsel => {
            console.log('server sucess')
            res.json(newAttendeeCounsel)
        })
        .catch(err => {
            console.log("Server error")
            res.status(400).json(err)
        })
    },
    findOne: (req,res) => {
        attendeeCounsel.findById(req.params.id)
        .then(oneAttendee => res.json(oneAttendee))
        .catch(err => res.json(err))
    },
    update: (req,res) => {
        console.log("update ID:", req.params.id)
        console.log("req.body:", req.body)
        attendeeCounsel.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true })
        .then(updatedAttendee => res.json(updatedAttendee))
        .catch(err => res.json(err))
    },
    delete: (req,res) => {
        attendeeCounsel.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
}