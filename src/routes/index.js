const { Router } = require("express");
const articulosRouter = require('./articulosRouter')
const router = Router();
const authRouter = require('./authRouter');

router.use("/articulo", articulosRouter);
router.use('/auth', authRouter);

module.exports = router;