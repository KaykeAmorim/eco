const LoginRepository = require('../repository/repository');

class LoginService {
    constructor(){
        this.repository = new LoginRepository();
    }

    async consultUser(email, password){
        return await this.repository.consultUser(email, password);   
    }
}

module.exports = {
    LoginService
}