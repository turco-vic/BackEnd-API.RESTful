const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
router.get("/", publisherController.getAllPublishers);
router.get("/:id", publisherController.getPublisher);
router.post("/", publisherController.createPublisher);
router.put("/:id", publisherController.updatePublisher);
router.delete("/:id", publisherController.deletePublisher);

module.exports = router;
