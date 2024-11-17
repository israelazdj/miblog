const { selectAutorId } = require("../models/autorModels");
const { selectAll, insertPosts, selectById } = require("../models/postsModels");

const getAllPosts = async (req, res, next) => {
  try {
    const [posts] = await selectAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const createPoasts = async (req, res, next) => {
  try {
    const [result] = await insertPosts(req.body);
    const posts = await selectById(result.insertId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostsByAuthor = async (req, res, next) => {
  const { autorid } = req.params;
  try {
    const autor = await selectAutorId(autorid);
    //console.log("entre a getPostsByAuthor", autor);
    if (!autor || autor.length === 0) {
      return res.status(404).json({ message: "Este autor no tiene posts" });
    }
    res.json(autor);
  } catch (error) {
    next(error);
  }
};

const getPostbyId = async (req, res, next) => {
  const { postsid } = req.params;
  try {
    const posts = await selectById(postsid);
    if (!posts) {
      return res.status(404).json({ message: "El post no existe." });
    }
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPosts, createPoasts, getPostsByAuthor, getPostbyId };
