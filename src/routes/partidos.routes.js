import { Router } from "express";


const router = Router();
import *as partidoCtrl from '../controllers/partido.controller'
import {authJwt} from '../middlewares'



router.post('/',[authJwt.verifyToken, authJwt.isAdmin],partidoCtrl.createPartido)
router.get('/', [authJwt.verifyToken],partidoCtrl.getPartidos);
router.get('/:partidoId', [authJwt.verifyToken],partidoCtrl.getPartidosById);
router.put('/:partidoId', [authJwt.verifyToken, authJwt.isAdmin],partidoCtrl.updatePartido);
router.delete('/:partidoId', [authJwt.verifyToken, authJwt.isAdmin],partidoCtrl.deletePartido)


export default router