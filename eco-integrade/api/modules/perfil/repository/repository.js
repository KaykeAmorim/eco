const Level = require('../model/model');

class PerfilRepository {
    constructor(){
        this.model = Level;
    }

    async getLevelInfo(score){
        const query = {
            "min": {"$lte": score},
            "max": {"$gt": score}
        }
        return await this.model.findOne(query);
    }
}

module.exports = {
    PerfilRepository
}