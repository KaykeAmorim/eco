const { PerfilService } = require('./service/service')

class PerfilController {
    constructor(){
        this.service = new PerfilService();
    }

    async renderPage(req, res, next){
        const user = await this.service.getUserByEmail(req.data.email);
        const level = await this.getLevelInfo(user.score);
        const data = this.buildInfoToPage(user, level)
        res.render('perfil', data);
    }

    async getLevelInfo(score){
        return await this.service.getLevelInfo(score);
    }

    buildInfoToPage(user, level){
        return {
            "user": user,
            "level": level
        }
    }

}

module.exports = {
    PerfilController
}