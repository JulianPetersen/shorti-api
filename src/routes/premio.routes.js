import {Router} from 'express'

const router = Router();

import * as premioCtrl from '../controllers/premio.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],premioCtrl.createPremio);

router.get('/',[authJwt.verifyToken] , premioCtrl.getPremios)


router.put('/',[authJwt.verifyToken,], premioCtrl.addParticipante)

router.put('/updateGanador', [authJwt.verifyToken], premioCtrl.updateGanador)


export default router;