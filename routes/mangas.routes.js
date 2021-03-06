const express = require("express")
const router = express.Router()
const mangasController = require('../controllers/mangas.controller')


router.post("/", mangasController.create)


// Get One Manga
router.get("/:id", mangasController.show)

// Get All Mangas
router.get("/", mangasController.index)

// Update One Manga
router.put("/:id",mangasController.update)


// Delete One Manga
router.delete("/:id", mangasController.destroy)


module.exports = router; 