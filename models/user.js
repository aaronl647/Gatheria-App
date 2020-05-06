const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    scheduleId: [{type: Schema.Types.ObjectId, ref: 'Availability'}],
    activityId: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
},{
    timestamps: true
}
)

const User = mongoose.model('User', UserSchema);
module.exports = User
