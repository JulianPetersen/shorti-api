import {Router} from 'express'

const router = Router();

import * as infoUserCtrl from '../controllers/infousuarios.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],infoUserCtrl.createInfoUser);

router.get('/',[authJwt.verifyToken, authJwt.isAdmin] , infoUserCtrl.getInfoUser)

router.get('/:userId', [authJwt.verifyToken, authJwt.isAdmin],infoUserCtrl.getInfoUserByuserId)

router.put('/:userId',[authJwt.verifyToken, authJwt.isAdmin], infoUserCtrl.updateInfoUser)

// router.delete('/:ligaId',[authJwt.verifyToken, authJwt.isAdmin] ,ligasCtrl.deleteLiga)

export default router;