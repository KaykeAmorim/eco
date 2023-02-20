const {mongoose} = require('../../../../database/connection')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    score: Number,
    createdDate: Date,
    updatedDate: Date
})

const User = new mongoose.model('User', UserSchema)
module.exports = User