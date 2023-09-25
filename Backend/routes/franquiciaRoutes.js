const { Router } = require('express');
const router = new Router();
var { getFranquicias, getFranquicia, updateFranquicia, deleteFranquicia, createFranquicia } = require('../controllers/franquiciaController');
//rutas
router.get('/franquicia', getFranquicias);
router.get('/franquicia/:id', getFranquicia);
router.post('/franquicia', createFranquicia);
router.put('/franquicia/:id', updateFranquicia)
router.delete('/franquicia/:id', deleteFranquicia);
module.exports = router;