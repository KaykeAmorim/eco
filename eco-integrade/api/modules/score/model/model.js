const {mongoose} = require('../../../../database/connection')

const TasksSchema = new mongoose.Schema({
    userId: String,
    email: String,
    category: String,
    tasks: Array,
    status: String,
    expiresIn: Date,
    createdDate: Date,
    updatedDate: Date
})

const Task = new mongoose.model('Task', TasksSchema)
module.exports = Task