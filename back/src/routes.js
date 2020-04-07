const express = require('express');

const LocatorController = require('./controllers/LocatorController');
const OfferController = require('./controllers/OfferController');
const LocatorProfileController = require('./controllers/LocatorProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile', LocatorProfileController.listLocator);

routes.get('/locators', LocatorController.list);
routes.post('/locators', LocatorController.create);

routes.get('/offers', OfferController.list);
routes.post('/offers', OfferController.create);
routes.delete('/offers/:id', OfferController.delete);

module.exports = routes;


/* Rotas */
/* Tipos de parâmetros

->Query params: após o '?' (filtros e paginações)
->Route params: parâmetros para identificar recursos únicos
->Request Body: corpo da requisição (criar ou alterar recursos)
*/
// routes.get('/users', (request, response) =>{
//     return response.json({
//         evento: 'InfoGirl',
//         local:"UFC"
//     })
// });