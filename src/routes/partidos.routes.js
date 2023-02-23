import {Router} from 'express'

const router = Router();

import * as partidosCtrl from '../controllers/partido.controller'
import { authJwt } from '../middlewares';


router.post('/', [authJwt.verifyToken, authJwt.isAdmin],partidosCtrl.createPartido);

router.get('/',[authJwt.verifyToken] , partidosCtrl.getPartidos)

router.get('/getlastenpartidos',[authJwt.verifyToken], partidosCtrl.getLastTenPartidos)

router.get('/:partidoId',[authJwt.verifyToken], partidosCtrl.getPartidoById)

router.get('/getPartidosByUser/:userId', partidosCtrl.getPartidosByUser)

router.put('/:partidoId',[authJwt.verifyToken] ,partidosCtrl.updatePartido)

router.delete('/:partidoId',[authJwt.verifyToken, authJwt.isAdmin] ,partidosCtrl.deletePartido)

export default router;  