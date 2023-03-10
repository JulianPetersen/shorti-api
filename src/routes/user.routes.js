import { Router } from "express";
const router = Router();
import *as userCtrl from '../controllers/user.controller'
import {authJwt, verifySignUp} from '../middlewares'



router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRoleExisted] ,userCtrl.createUser)
router.get('/',[authJwt.verifyToken] , userCtrl.getUsers)
router.post('/recoverypassword', userCtrl.updatePassword);
router.post('/changepassword',[authJwt.verifyToken],userCtrl.changePassword)
// router.get('/:userId',[authJwt.verifyToken] , userCtrl.getUserById)

export default router