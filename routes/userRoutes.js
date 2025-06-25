import express from "express";
import { loginUser, registerUser, updatePassword, updateUser ,deleteUser

} from "../controllers/userControllers.js";
import { checkAuthorization } from "../middleware/checkAuthorization.js";

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/:userID")
.put(checkAuthorization,updateUser)
.patch(checkAuthorization,updatePassword)
.delete(checkAuthorization);

export default router;
