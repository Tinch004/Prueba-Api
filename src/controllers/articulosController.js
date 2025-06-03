const { Articulo } = require('../config/db');
const { Op } = require('sequelize');

const getArticulosPorNombre = async (req, res) => {
  try {
    const { nombre } = req.params;
    const articulos = await Articulo.findAll({
      where: {
        nombre: { [Op.like]: `%${nombre}%` }
      }
    });
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar por nombre' });
  }
};

const getArticulosPorEstado = async (req, res) => {
  try {
    const { estado } = req.params;
    const articulos = await Articulo.findAll({ where: { estado } });
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar por estado' });
  }
};

const getArticuloPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const articulo = await Articulo.findByPk(id);
    if (!articulo) return res.status(404).json({ message: 'No encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar por ID' });
  }
};

const crearArticulo = async (req, res) => {
  try {
    const { nombre, marca, fecha_activacion } = req.body;
    const nuevo = await Articulo.create({ nombre, marca, fecha_activacion });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear artículo' });
  }
};

const actualizarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, marca, fecha_activacion, estado } = req.body;

    const articulo = await Articulo.findByPk(id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });

    await articulo.update({ nombre, marca, fecha_activacion, estado });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

const desactivarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const articulo = await Articulo.findByPk(id);
    if (!articulo) return res.status(404).json({ message: 'No encontrado' });

    await articulo.update({ estado: 'inactivo' });
    res.json({ message: 'Artículo desactivado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al desactivar' });
  }
};

module.exports = {
  getArticulosPorNombre,
  getArticulosPorEstado,
  getArticuloPorId,
  crearArticulo,
  actualizarArticulo,
  desactivarArticulo
};
