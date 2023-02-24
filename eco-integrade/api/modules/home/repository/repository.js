const Task = require('../model/model')

class HomeRepository {
    constructor(){
        this.model = Task;
    }

    async getTasks(email){
        const query = {
            email,
            status: "pending"
        }
        return await this.model.find(query);
    }
}

module.exports = {
    HomeRepository
}