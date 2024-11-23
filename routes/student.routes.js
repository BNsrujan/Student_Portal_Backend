import { Router } from "express"

const router = Router();


router.route("/login").post(loginUser);
router.route("/logout").post(verfiyJWT)
router.route("/dashbard").post(verfiyJWT);