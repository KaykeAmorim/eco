const { ScoreRepository } = require('../repository/repository')

class ScoreService {
    constructor(){
        this.repository = new ScoreRepository();
    }

    async getTop10(){
        return await this.repository.getTop10();
    }

}

module.exports = {
    ScoreService
}