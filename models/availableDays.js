const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    dayOfWeek: {type: [String], required: true},
    earliestTime: {type: [String], default: true},
    latestTime:{type: [String], default: true}
},{
    timestamps: true
})

const Avail = mongoose.model('Availability', daySchema)

module.exports = Avail