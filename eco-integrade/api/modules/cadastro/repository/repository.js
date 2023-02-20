const User = require('../../login/model/model');

class RegisterRepository {
    constructor(){
        this.model = User;
    }
    
    async register(data){
        await this.model.create(data);
    }

    async getUserByEmail(email){
        return await this.model.findOne({email});
    }
}

module.exports = {
    RegisterRepository
}