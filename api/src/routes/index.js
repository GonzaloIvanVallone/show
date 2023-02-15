const { Router } = require('express');
const User = require("./UserRoute.js");
const String = require("./StringRoute.js")


const router = Router();
router.use("/user", User);
router.use("/string", String)


module.exports = router;
