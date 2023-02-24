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

}

module.exports = {
    HomeController
}