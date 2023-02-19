const jwt = require('jsonwebtoken');
const config =  require('../../config/config');

class Authenticate {
    constructor(){

    }

    generateToken(req, res, next){
        const email = req?.email;
        const token = jwt.sign({
            email
        }, config.JWTSecret, {expiresIn: '24h'});
        res.status(200);
        res.json({token});
        next();
    }

    validateToken(req, res, next){
        const [auth, token] = req['headers']['authentication'].split(' ');
        const data = auth === 'Beaurer' ?  this.verifyToken(token) : undefined;
        req = {
            ...req,
            data
        }
        next();
    }

    verifyToken(token){
        return jwt.verify(token, config.JWTSecret)
    }
}

module.exports = {
    Authenticate
}