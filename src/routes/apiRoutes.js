const router = require("express").Router();

router.use("/posts", require("./api/apipostsRoutes"));
router.use("/autor", require("./api/apiautorRoutes"));

module.exports = router;
