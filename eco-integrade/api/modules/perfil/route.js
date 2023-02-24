const express = require('express');
const route = express.Router();
const Factory = require('../factory/factory');
const { PerfilController } = require('./controller');
const { Authenticate } = require('../authenticate/authenticate');

route.get('/perfil',
 Factory.build(Authenticate, 'getAuthByCookies'),
 Factory.build(Authenticate, 'validateToken'),
 Factory.build(PerfilController, 'renderPage'));

module.exports = route;