const { RegisterService } = require('./service/service')


class RegisterController {
    constructor(){
        this.service = new RegisterService();
    }

    renderPage(req, res, next){
        res.render('cadastro');
    }

    async registertUser(req, res, next){
        const {name, email, password} = req.body;
        const exists = await this.service.registertUser(name, email, password);
        if(exists){
            res.status(401);
            res.json({"erro": "Usuário existente"});
        }
        else{
            req.email = email;
            req.name = name;
            req.score = 0;
            req.createdDate = Date.parse(new Date().toUTCString());
            next();
        }
    }
}

module.exports = {
    RegisterController
}