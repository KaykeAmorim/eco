const { PerfilRepository } = require('../repository/repository')
const { RegisterRepository } = require('../../cadastro/repository/repository')

class PerfilService {
    constructor(){
        this.repository = new PerfilRepository();
        this.registerRepository = new RegisterRepository();
    }

    async getLevelInfo(score){
        return await this.repository.getLevelInfo(score);
    }

    async getUserByEmail(email){
        return await this.registerRepository.getUserByEmail(email);
    }

}

module.exports = {
    PerfilService
}