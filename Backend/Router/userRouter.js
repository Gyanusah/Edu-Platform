import express from 'express'
import  {register,login,logout} from '../controllers/userControllers.js'

const router = express.Router()
// router.route("/register").post(register)
router.post("/register", register);
router.post("/login",login);;
router.post("/logout",logout)
export default router;