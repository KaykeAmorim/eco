const express = require('express');
const route = express.Router();
const Factory = require('../factory/factory');
const { LoginController } = require('./controller');
const Cryptograph = require('../../config/cryptograph');
const { Authenticate } = require('../authenticate/authenticate');

route.get('/login', Factory.build(LoginController, 'renderPage'));
route.post('/login', 
    Cryptograph.password, 
    Factory.build(LoginController, 'consultUser'),
    Factory.build(Authenticate, 'generateToken')
);

module.exports = route;