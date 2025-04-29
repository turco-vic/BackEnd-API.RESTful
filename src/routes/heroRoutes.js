const express = require("express");
const router = express.Router();
const heroController = require("../controllers/heroController");

router.get("/", heroController.getAllHeroes);
router.get("/:id", heroController.getHero);
router.post("/", heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero);

module.exports = router;
