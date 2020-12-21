const express = require("express")
const router = express.Router()
const authorsController = require('../controllers/authors.controller')
// Routes for Authors

// Create One Authors

router.post("/", authorsController.create)


// Get One Author
router.get("/:id", authorsController.show)


// Get All Authors
router.get("/", authorsController.index)


// Update One Author
router.put("/:id", authorsController.destroy)

// Delete One Author
router.delete("/:id", authorsController.update)

module.exports = router 