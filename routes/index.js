const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.callingName1);

module.exports = routes;