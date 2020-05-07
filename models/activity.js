const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    activity: [String]
},{
    timestamps: true 
})

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;