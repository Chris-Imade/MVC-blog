const express = require("express");
const router = express.Router();
const {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
} = require("../controllers/blogController");


router.get("/", blog_index)

router.get("/create", blog_create_get)

// Create New Blog
router.post("/", blog_create_post)
// Get single blog
router.get("/:id", blog_details)
// Delete Request handler
router.delete("/:id", blog_delete);

module.exports = router;