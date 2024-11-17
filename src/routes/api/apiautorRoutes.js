const {
  getAllAutors,
  createAutor,
  getPostsByAuthor,
} = require("../../controllers/autorController");

const router = require("express").Router();

router.get("/", getAllAutors);
router.get("/:autorid", getPostsByAuthor);

router.post("/", createAutor);

module.exports = router;
