const { Router } = require("express");
const router = Router();
const { createNewUser, userLogin} = require('../Controllers/userController');


router.post("/", createNewUser);
router.post("/login", userLogin);
/*router.get("/", getAllUsers);
router.post("/login", userLogin);
router.get("/profile/:id", getUserProfile);
router.put("/profile/:id", updateUserProfile);
*/
module.exports = router;