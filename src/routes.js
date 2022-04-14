const { Router } = require('express');
const controller = require('./controllers/controller')

const routes = new Router();

routes.get('/users', controller.listUsers);

module.exports = routes;