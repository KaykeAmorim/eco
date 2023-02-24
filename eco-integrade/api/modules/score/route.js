const express = require('express');
const route = express.Router();
const Factory = require('../factory/factory');
const { ScoreController } = require('./controller');
const { Authenticate } = require('../authenticate/authenticate');

route.get('/score',
 Factory.build(Authenticate, 'getAuthByCookies'),
 Factory.build(Authenticate, 'validateToken'),
 Factory.build(ScoreController, 'renderPage'));

module.exports = route;