const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroController");
const upload = require("../config/upload.js");

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getHero);
router.post("/", upload.single("photo"), heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

module.exports = router;
