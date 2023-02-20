const express = require('express');
const route = express.Router();
const Factory = require('../factory/factory');
const { RegisterController } = require('./controller');
const Cryptograph = require('../../config/cryptograph');
const { Authenticate } = require('../authenticate/authenticate');

route.get('/cadastro', Factory.build(RegisterController, 'renderPage'));
route.post('/cadastro', 
    Cryptograph.password, 
    Factory.build(RegisterController, 'registertUser'),
    Factory.build(Authenticate, 'generateToken')
);

module.exports = route;