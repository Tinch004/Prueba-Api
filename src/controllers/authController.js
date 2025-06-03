const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const generarToken = (req, res) => {
  const { id, email } = req.body;

  const token = jwt.sign({ id, email }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
};

module.exports = { generarToken };