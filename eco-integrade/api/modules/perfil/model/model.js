const {mongoose} = require('../../../../database/connection')

const LevelsSchema = new mongoose.Schema({
    userId: String,
    min: Number,
    max: Number,
    image: String
})

const Level = new mongoose.model('Level', LevelsSchema)
module.exports = Level