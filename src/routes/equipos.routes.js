import {Router} from 'express'
import upload from '../middlewares/multer'

const router = Router();
import * as equiposCtrl from '../controllers/equipo.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],upload.single('imgUrl') ,equiposCtrl.createEquipo)

router.get('/',[authJwt.verifyToken] , equiposCtrl.getEquipos)

router.get('/:equipoId', [authJwt.verifyToken], equiposCtrl.getEquipoById)

router.get('/getEquipoByLiga/:ligaId',[authJwt.verifyToken], equiposCtrl.getEquiposByLigas)

router.put('/:equipoId',[authJwt.verifyToken, authJwt.isAdmin] ,equiposCtrl.updateEquipo)

router.delete('/:equipoId',[authJwt.verifyToken, authJwt.isAdmin] ,equiposCtrl.deleteEquipo)

export default router;