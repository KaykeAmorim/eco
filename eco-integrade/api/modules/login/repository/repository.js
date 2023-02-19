const User = require('../model/model')

class LoginRepository{
    constructor(){
        this.model = User;
    }

    async consultUser(email, password){
        const query = {
                email,
                password
            };
        return await this.model.findOne(query);
    }
}

module.exports = LoginRepository