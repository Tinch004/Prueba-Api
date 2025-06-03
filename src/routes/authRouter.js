const { Router } = require('express');
const { generarToken } = require('../controllers/authController');
const router = Router();

router.post('/token', generarToken);

module.exports = router;