const { RegisterRepository } = require('../repository/repository');

class RegisterService {
    constructor(){
        this.repository = new RegisterRepository();
    }

    async registertUser(name, email, password){
        const result = await this.repository.getUserByEmail(email);
        const exists = result?.email
        !exists ? await this._register(name, email, password) : null;
        return exists;
    }

    async _register(name, email, password){
        const data = this.buildInitialData(name, email, password);
        await this.repository.register(data);
    }

    buildInitialData(name, email, password){
        return {
            score: 0,
            name,
            email,
            password,
            createdDate: Date.parse(new Date().toUTCString()),
            updatedDate: Date.parse(new Date().toUTCString())
        };
    }
}

module.exports = {
    RegisterService
}