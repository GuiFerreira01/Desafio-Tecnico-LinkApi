const { Router } = require('express');
const controller = require('./controllers/controller')

const routes = new Router();

routes.get('/', controller.listUsers);




module.exports = routes;