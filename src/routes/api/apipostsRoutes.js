const {
  getAllPosts,
  createPoasts,
  getPostsByAuthor,
  getPostbyId,
} = require("../../controllers/postController");

const router = require("express").Router();

router.get("/", getAllPosts);
router.get("/:postsid", getPostbyId);
router.get("/autor/:autorid", getPostsByAuthor);

router.post("/", createPoasts);

module.exports = router;
