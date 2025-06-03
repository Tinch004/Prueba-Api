const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // 👈

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Acceso denegado - token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token); // 👈

    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Decoded:', decoded); // 👈

    req.user = decoded;
    next();
  } catch (error) {
    console.error('ERROR:', error); // 👈
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = { authMiddleware };