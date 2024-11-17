const { selectAll, insertAutor, selectById } = require("../models/autorModels");

const getAllAutors = async (req, res, next) => {
  try {
    const [autor] = await selectAll();
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const createAutor = async (req, res, next) => {
  try {
    const [result] = await insertAutor(req.body);
    const autor = await selectById(result.insertId);
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const getPostsByAuthor = async (req, res, next) => {
  const { autorid } = req.params;
  try {
    const autor = await selectById(autorid);
    if (!autor) {
      // Si el autor no existe
      return res.status(404).json({ message: "Autor no encontrado." });
    }
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAutors, createAutor, getPostsByAuthor };
