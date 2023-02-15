const { Router } = require("express");
const router = Router();
const { createNewString, getAll } = require('../Controllers/stringController');

router.post("/", createNewString);
router.get("/", getAll)

module.exports = router;