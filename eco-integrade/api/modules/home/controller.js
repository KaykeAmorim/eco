const { HomeService } = require('./service/service')

class HomeController {
    constructor(){
        this.service = new HomeService();
    }

    async renderPage(req, res, next){
        const result = await this.getTasks(req.data?.email);
        const data = this.buildInfoToPage(req.data?.name, result);
        res.render('home', data);
    }

    async getTasks(email){
        return await this.service.getTasks(email);
    }

    buildInfoToPage(name, data){
        return {
            "challenges": data,
            "name":  name.split(' ')[0]
        };
    }

    async handleTaskChange(req, res, next){
        const { status } = req.params;
        const { email }  = req.data;
        const { challengeId, taskId } = req.body;

        const data = {
            status,
            email,
            challengeId,
            taskId
        }

        try{
            await this.service.handleChange(data);
            res.status(200);
            res.json({ok: "ok"});
        }
        catch{
            res.status(500);
            res.json({error: "Internal server error"});
        }
    }

}

module.exports = {
    HomeController
}