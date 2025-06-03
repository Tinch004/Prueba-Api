const { Router } = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { validarArticulo } = require('../middlewares/articuloMiddleware');
const { getArticulosPorNombre, getArticulosPorEstado, getArticuloPorId, crearArticulo, actualizarArticulo, desactivarArticulo } = require('../controllers/articulosController');
const router = Router()

router.get('/nombre/:nombre', authMiddleware, getArticulosPorNombre);

router.get('/estado/:estado', authMiddleware, getArticulosPorEstado);

router.get('/:id', authMiddleware, getArticuloPorId);

router.post('/', authMiddleware, validarArticulo, crearArticulo);

router.put('/:id', authMiddleware,validarArticulo, actualizarArticulo);

router.delete('/:id', authMiddleware, desactivarArticulo);

module.exports = router