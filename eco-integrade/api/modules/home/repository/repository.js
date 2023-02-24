const Task = require('../model/model');
const User = require('../../login/model/model');

class HomeRepository {
    constructor(){
        this.model = Task;
        this.user = User;
    }

    async getTasks(email){
        const query = {
            email,
            status: "pending"
        }
        return await this.model.find(query);
    }

    async getTaskById(taskId){
        const _id = taskId;
        const query = {
           _id
        }
        return await this.model.findOne(query);
    }

    async updateTask(filter, upserts){
        const query = {
            "$set": upserts
        }

        await this.model.updateOne(filter, query);
    }

    async updateUser(filter, upserts){
        const query = {
            "$set": upserts
        }

        await this.user.updateOne(filter, query);
    }
}

module.exports = {
    HomeRepository
}