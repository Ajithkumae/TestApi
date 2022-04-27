const express = require("express");
const router = express();
const feedController = require("../controllers/feed");

router.get("/posts", feedController.getPosts);
router.post("/post", feedController.createPost);

module.exports = router;
