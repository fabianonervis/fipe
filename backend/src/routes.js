const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const MarcaController = require('./controllers/MarcaController');
const CarroController = require('./controllers/CarroController');

const routes = express.Router();

routes.get('/marcas', MarcaController.index);

routes.get('/carros/:idMarca', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required()
    })
}), CarroController.indexMarca);

routes.get('/carros/:idMarca/:idModelo', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required(),
        idModelo : Joi.number().required(),        
    })
}), CarroController.indexModelo);

routes.get('/carros/:idMarca/:idModelo/:anoMes', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required(),
        idModelo : Joi.number().required(),        
        anoMes : Joi.string().required()
    })
}), CarroController.detailModelo);

routes.get('/fipe/carros/:idMarca/:fipeCodigo', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required(),
        fipeCodigo : Joi.string().required()
    })
}), CarroController.fipeCode);

routes.get('/fipe/carros/:idMarca/:fipeCodigo', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required(),
        fipeCodigo : Joi.string().required()
    })
}), CarroController.fipeCode);

routes.get('/fipe/carros/:idMarca/:fipeCodigo/:anoMes', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        idMarca : Joi.number().required(),
        fipeCodigo : Joi.string().required(),
        anoMes : Joi.string().required()
    })
}), CarroController.fipeCodeAno);

module.exports = routes;