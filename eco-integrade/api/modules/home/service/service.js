const { HomeRepository } = require('../repository/repository')

class HomeService {
    constructor(){
        this.repository = new HomeRepository();
    }

    async getTasks(email){
        return await this.repository.getTasks(email);
    }
}

module.exports = {
    HomeService
}