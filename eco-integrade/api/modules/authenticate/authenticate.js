const jwt = require('jsonwebtoken');
const config =  require('../../config/config');

class Authenticate {
    constructor(){

    }

    getAuthByCookies(req, res, next){
        const {token} = req.cookies;
        req.headers.authorization = 'Beaurer '.concat(token);
        next();
    }

    generateToken(req, res, next){
        const email = req?.email;
        const name = req?.name;
        const createdDate = req?.createdDate;
        const token = jwt.sign({
            email,
            name,
            createdDate,
            
        }, config.JWTSecret, {expiresIn: '24h'});
        res.status(200);
        res.cookie('token', token, {maxAge: 86400000});
        res.json({token});
        next();
    }

    validateToken(req, res, next){
        try{
            const [auth, token] = req['headers']['authorization'].split(' ');
            const data = auth === 'Beaurer' ?  this.verifyToken(token) : undefined;
            req.data = data
            next();
        }
        catch{
            res.status(401);
            res.json({"erro": "Não Autorizado"});
        }
        
    }

    verifyToken(token){
        return jwt.verify(token, config.JWTSecret)
    }
}

module.exports = {
    Authenticate
}