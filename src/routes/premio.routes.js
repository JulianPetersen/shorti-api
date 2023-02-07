import {Router} from 'express'

const router = Router();

import * as premioCtrl from '../controllers/premio.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],premioCtrl.createPremio);

router.get('/',[authJwt.verifyToken] , premioCtrl.getPremios)

// router.get('/:ligaId', ligasCtrl.getLigasById)

router.put('/:premioId',[authJwt.verifyToken,], premioCtrl.updatePremio)

// router.delete('/:ligaId',[authJwt.verifyToken, authJwt.isAdmin] ,ligasCtrl.deleteLiga)

export default router;