const crypto = require('crypto')

class Cryptograph{
    constructor(){
        
    }

    password(req, res, next){
        const {password} = req.body
        const hmac = crypto.createHmac('sha256', password)
        req.body['password'] = (hmac.digest('hex'))
        next()
    }
}

module.exports = new Cryptograph()