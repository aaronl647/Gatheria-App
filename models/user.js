const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const SALT_ROUND = 6;


const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    scheduleId: [{type: Schema.Types.ObjectId, ref: 'Availability'}],
    activityId: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
},{
    timestamps: true
});

// UserSchema.set('toJSON', {
//     transform: function(doc, ret){
//         delete ret.password
//         return ret
//     }
// })

UserSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    })
});

const User = mongoose.model('User', UserSchema);
module.exports = User
