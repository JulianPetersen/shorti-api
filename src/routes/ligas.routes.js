import { Router } from "express";
import upload from '../middlewares/multer'

const router = Router();
import *as ligaCtrl from '../controllers/liga.controller'
import {authJwt} from '../middlewares'
import liga from "../models/liga";



router.post('/',[authJwt.verifyToken, authJwt.isAdmin],upload.single('imgUrl'),ligaCtrl.createLiga)
router.get('/', [authJwt.verifyToken],ligaCtrl.getAllLigas);
router.get('/:ligaId', [authJwt.verifyToken],ligaCtrl.getLigaById);
router.put('/:ligaId', [authJwt.verifyToken, authJwt.isAdmin],upload.single('imgUrl'),ligaCtrl.updateLiga);
router.delete('/:ligaId', [authJwt.verifyToken, authJwt.isAdmin],ligaCtrl.deleteLiga)


export default router