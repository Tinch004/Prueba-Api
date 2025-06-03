const { body, validationResult } = require('express-validator');

const validarArticulo = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 36 }).withMessage('El nombre debe tener como máximo 36 caracteres'),

  body('marca')
    .notEmpty().withMessage('La marca es obligatoria')
    .isLength({ max: 36 }).withMessage('La marca debe tener como máximo 36 caracteres'),

  body('estado')
    .optional()
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser "activo" o "inactivo"'),

  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

module.exports = { validarArticulo };
