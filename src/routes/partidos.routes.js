import {Router} from 'express'

const router = Router();

import * as partidosCtrl from '../controllers/partido.controller'
import { authJwt } from '../middlewares';


router.post('/', [authJwt.verifyToken, authJwt.isAdmin],partidosCtrl.createPartido);

router.get('/',[authJwt.verifyToken] , partidosCtrl.getPartidos)

router.get('/:partidoId', partidosCtrl.getPartidoById)

router.put('/:partidoId',[authJwt.verifyToken, authJwt.isAdmin] ,partidosCtrl.updatePartido)

router.delete('/:partidoId',[authJwt.verifyToken, authJwt.isAdmin] ,partidosCtrl.deletePartido)

export default router;