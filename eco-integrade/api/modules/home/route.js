const express = require('express');
const route = express.Router();
const Factory = require('../factory/factory');
const { HomeController } = require('./controller');
const { Authenticate } = require('../authenticate/authenticate');

route.get('/home',
 Factory.build(Authenticate, 'getAuthByCookies'),
 Factory.build(Authenticate, 'validateToken'),
 Factory.build(HomeController, 'renderPage'));

 route.put('/handleChange/:status',
 Factory.build(Authenticate, 'validateToken'),
 Factory.build(HomeController, 'handleTaskChange'));

module.exports = route;