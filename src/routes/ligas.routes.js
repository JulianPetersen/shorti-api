import {Router} from 'express'
import upload from '../middlewares/multer'

const router = Router();

import * as ligasCtrl from '../controllers/ligas.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], upload.single('imgUrl') ,ligasCtrl.createLigas);

router.get('/',[authJwt.verifyToken] , ligasCtrl.getLigas)

router.get('/:ligaId', ligasCtrl.getLigasById)

router.put('/:ligaId',[authJwt.verifyToken, authJwt.isAdmin], ligasCtrl.updateLiga)

router.delete('/:ligaId',[authJwt.verifyToken, authJwt.isAdmin] ,ligasCtrl.deleteLiga)

export default router;