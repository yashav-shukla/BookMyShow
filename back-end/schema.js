const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    movie:{type:String},
    slot:{type:String},
    seats:{
        A1:{type:Number},
        A2:{type:Number},
        A3:{type:Number},
        A4:{type:Number},
        A5:{type:Number},
        A6:{type:Number},
        A7:{type:Number},
        A8:{type:Number},
        A9:{type:Number},
        A10:{type:Number},
    }
})

const Ticket = mongoose.model('bookmovie',TicketSchema)

module.exports = Ticket