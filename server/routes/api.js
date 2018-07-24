var express = require('express');
var router = express.Router();

// Require controller modules
var pruebaLimitadoresController = require('../controllers/pruebaLimitadoresController');
var montajeController = require('../controllers/montajeController');
var personaController = require('../controllers/personaController');
var reparacionController = require('../controllers/reparacionController');
var reporteController = require('../controllers/reporteController');
var revisionController = require('../controllers/revisionController');
var adquisicionController = require('../controllers/adquisicionController');
var clienteController = require('../controllers/clienteController');
var contratoController = require('../controllers/contratoController');
var gruaController = require('../controllers/gruaController');
var guiaDespachoController = require('../controllers/guiaDespachoController');
var obraController = require('../controllers/obraController');
var ofertaController = require('../controllers/ofertaController');
var ordenCompraController = require('../controllers/ordenCompraController');
var oficinaController = require('../controllers/oficinaController');
var personaForaneaController = require('../controllers/personaForaneaController');

//rutas para personas foraneas
router.get('/personaForaneas', personaForaneaController.personaForaneaList);
router.post('/personaForaneas/create', personaForaneaController.personaForaneaCreate);
router.get('/personaForaneas/:id', personaForaneaController.personaForaneaShow);
router.put('/personaForaneas/:id',personaForaneaController.personaForaneaUpdate);
router.delete('/personaForaneas/:id', personaForaneaController.personaForaneaDelete);

//rutas para oficinas
router.get('/oficinas', oficinaController.oficinaList);
router.post('/oficinas/create', oficinaController.oficinaCreate);
router.get('/oficinas/:id', oficinaController.oficinaShow);
router.put('/oficinas/:id',oficinaController.oficinaUpdate);
router.delete('/oficinas/:id', oficinaController.oficinaDelete);

//rutas para pruebas de limitadores
router.get('/pruebaLimitadores', pruebaLimitadoresController.pruebaLimitadoresList);
router.post('/pruebaLimitadores/create', pruebaLimitadoresController.pruebaLimitadoresCreate);
router.get('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresShow);
router.put('/pruebaLimitadores/:id',pruebaLimitadoresController.pruebaLimitadoresUpdate);
router.delete('/pruebaLimitadores/:id', pruebaLimitadoresController.pruebaLimitadoresDelete);

//rutas para montajes
router.get('/montajes', montajeController.montajeList);
router.post('/montajes/create', montajeController.montajeCreate);
router.get('/montajes/:id', montajeController.montajeShow);
router.put('/montajes/:id',montajeController.montajeUpdate);
router.delete('/montajes/:id', montajeController.montajeDelete);

//rutas para personas
router.get('/personas', personaController.personaList);
router.post('/personas/create', personaController.personaCreate);
router.get('/personas/:id', personaController.personaShow);
router.put('/personas/:id',personaController.personaUpdate);
router.delete('/personas/:id', personaController.personaDelete);

//rutas para reparaciones
router.get('/reparaciones', reparacionController.reparacionList);
router.post('/reparaciones/create', reparacionController.reparacionCreate);
router.get('/reparaciones/:id', reparacionController.reparacionShow);
router.put('/reparaciones/:id',reparacionController.reparacionUpdate);
router.delete('/reparaciones/:id', reparacionController.reparacionDelete);

//rutas para reportes
router.get('/reportes', reporteController.reporteList);
router.post('/reportes/create', reporteController.reporteCreate);
router.get('/reportes/:id', reporteController.reporteShow);
router.put('/reportes/:id',reporteController.reporteUpdate);
router.delete('/reportes/:id', reporteController.reporteDelete);

//rutas para revisiones
router.get('/revisiones', revisionController.revisionList);
router.post('/revisiones/create', revisionController.revisionCreate);
router.get('/revisiones/:id', revisionController.revisionShow);
router.put('/revisiones/:id',revisionController.revisionUpdate);
router.delete('/revisiones/:id', revisionController.revisionDelete);

//rutas para adquisiciones
router.get('/adquisiciones', adquisicionController.adquisicionList);
router.post('/adquisiciones/create', adquisicionController.adquisicionCreate);
router.get('/adquisiciones/:id', adquisicionController.adquisicionShow);
router.put('/adquisiciones/:id',adquisicionController.adquisicionUpdate);
router.delete('/adquisiciones/:id', adquisicionController.adquisicionDelete);

//rutas para clientes
router.get('/clientes', clienteController.clienteList);
router.post('/clientes/create', clienteController.clienteCreate);
router.post('/clientes/:id/createOficina', clienteController.clienteOficinaCreate);
router.post('/clientes/:id/createPersonaForanea', clienteController.clientePersonaForaneaCreate);
router.get('/clientes/:id', clienteController.clienteShow);
router.put('/clientes/:id',clienteController.clienteUpdate);
router.delete('/clientes/:id', clienteController.clienteDelete);

//rutas para contratos
router.get('/contratos', contratoController.contratoList);
router.post('/contratos/create', contratoController.contratoCreate);
router.get('/contratos/:id', contratoController.contratoShow);
router.put('/contratos/:id',contratoController.contratoUpdate);
router.delete('/contratos/:id', contratoController.contratoDelete);

//rutas para gruas
router.get('/gruas', gruaController.gruaList);
router.post('/gruas/create', gruaController.gruaCreate);
router.get('/gruas/:id', gruaController.gruaShow);
router.put('/gruas/:id',gruaController.gruaUpdate);
router.delete('/gruas/:id', gruaController.gruaDelete);

//rutas para guias de despacho
router.get('/guiasDespacho', guiaDespachoController.guiaDespachoList);
router.post('/guiasDespacho/create', guiaDespachoController.guiaDespachoCreate);
router.get('/guiasDespacho/:id', guiaDespachoController.guiaDespachoShow);
router.put('/guiasDespacho/:id',guiaDespachoController.guiaDespachoUpdate);
router.delete('/guiasDespacho/:id', guiaDespachoController.guiaDespachoDelete);

//rutas para obras
router.get('/obras', obraController.obraList);
router.post('/obras/create', obraController.obraCreate);
router.get('/obras/:id', obraController.obraShow);
router.put('/obras/:id',obraController.obraUpdate);
router.delete('/obras/:id', obraController.obraDelete);

//rutas para ofertas
router.get('/ofertas', ofertaController.ofertaList);
router.post('/ofertas/create', ofertaController.ofertaCreate);
router.get('/ofertas/:id', ofertaController.ofertaShow);
router.put('/ofertas/:id',ofertaController.ofertaUpdate);
router.delete('/ofertas/:id', ofertaController.ofertaDelete);

//rutas para ordenes de compra
router.get('/ordenesCompra', ordenCompraController.ordenCompraList);
router.post('/ordenesCompra/create', ordenCompraController.ordenCompraCreate);
router.get('/ordenesCompra/:id', ordenCompraController.ordenCompraShow);
router.put('/ordenesCompra/:id',ordenCompraController.ordenCompraUpdate);
router.delete('/ordenesCompra/:id', ordenCompraController.ordenCompraDelete);

module.exports = router;