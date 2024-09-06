import { Router } from "express";


const router = Router();
import *as fechasCtrl from '../controllers/fechas.controller'
import {authJwt} from '../middlewares'




router.post('/',[authJwt.verifyToken, authJwt.isAdmin],fechasCtrl.createFecha)
router.get('/', [authJwt.verifyToken],fechasCtrl.getAllFechas);
router.get('/:fechaId', [authJwt.verifyToken],fechasCtrl.getFechaById);
router.get('/getByLiga/:ligaId', [authJwt.verifyToken],fechasCtrl.getFechasByLiga);
router.put('/:fechaId', [authJwt.verifyToken, authJwt.isAdmin],fechasCtrl.updateFecha);
router.delete('/:fechaId', [authJwt.verifyToken, authJwt.isAdmin],fechasCtrl.deleteFecha)


export default router