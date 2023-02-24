const { HomeRepository } = require('../repository/repository')
const { RegisterRepository } = require('../../cadastro/repository/repository');

class HomeService {
    constructor(){
        this.repository = new HomeRepository();
        this.registerRepository = new RegisterRepository();
    }

    async getTasks(email){
        return await this.repository.getTasks(email);
    }

    async handleChange(data){
        const result = await this.repository.getTaskById(data.challengeId);
        const index = result.tasks.findIndex((task) => {
                        const id = task._id.toString()
                        return id == data.taskId
                    });
        const user = await this.registerRepository.getUserByEmail(data.email);
        return data.status === "completed" ? await this.handleCompleted(user, result, index) : await this.handleIncompleted(user, result, index); 
    }

    async handleCompleted(user, data, index){
        data.tasks[index]['isCompleted'] = true;
        user.score += data.tasks[index]['points'];
        await this.repository.updateTask({"_id": data._id}, data);
        await this.repository.updateUser({"_id": user._id}, user);
    }

    async handleIncompleted(user, data, index){
        data.tasks[index]['isCompleted'] = false;
        user.score -= data.tasks[index]['points'];
        await this.repository.updateTask({"_id": data._id}, data);
        await this.repository.updateUser({"_id": user._id}, user);
    }
}

module.exports = {
    HomeService
}