const { ScoreService } = require('./service/service')

class ScoreController {
    constructor(){
        this.service = new ScoreService();
    }

    async renderPage(req, res, next){
        const result = await this.getTop10();
        const data = this.buildInfoToPage(result);
        res.render('score', data);
    }

    async getTop10(){
        return await this.service.getTop10();
    }

    buildInfoToPage(data){
        return {
            "users": data
        }
    }

}

module.exports = {
    ScoreController
}