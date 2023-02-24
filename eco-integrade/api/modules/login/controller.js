const { LoginService } = require('./service/service');

class LoginController{
    constructor(){
        this.service = new LoginService();
    }

    renderPage(req, res, next){
        res.render('index');
        next();
    }

    async consultUser(req, res, next){
        const {email, password} = req.body
        const result = await this.service.consultUser(email, password);
        if(!result){
            res.status(404);
            res.json({"erro": "Not Found User"});
        }
        else{
            req.name = result.name;
            req.email = result.email;
            req.createdDate = result.createdDate;
            next();
        }
    }
}

module.exports = {
    LoginController
}