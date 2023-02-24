const User = require('../../login/model/model');

class ScoreRepository {
    constructor(){
        this.model = User;
    }

    async getTop10(){
        const query = [
            {
                "$match": {}
            },
            {
                "$sort": {
                    "score": -1
                }
            },
            {
                "$limit": 10
            }
        ]
        return await this.model.aggregate(query);
    }
}

module.exports = {
    ScoreRepository
}