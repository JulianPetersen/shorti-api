import {Router} from 'express'

const router = Router();

import * as infoUserCtrl from '../controllers/infousuarios.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken],infoUserCtrl.createInfoUser);

router.get('/',[authJwt.verifyToken] , infoUserCtrl.getInfoUser)

router.get('/:userId', [authJwt.verifyToken],infoUserCtrl.getInfoUserByuserId)

router.put('/:userId',[authJwt.verifyToken,], infoUserCtrl.updateInfoUser)

// router.delete('/:ligaId',[authJwt.verifyToken, authJwt.isAdmin] ,ligasCtrl.deleteLiga)

export default router;