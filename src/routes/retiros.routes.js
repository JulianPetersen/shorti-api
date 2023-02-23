import {Router} from 'express'

const router = Router();

import * as retirosCtrl from '../controllers/retiros.controller'
import { authJwt } from '../middlewares';


router.post('/', [authJwt.verifyToken] ,retirosCtrl.createNewRetiro);

router.get('/', [authJwt.verifyToken] ,retirosCtrl.getRetiros);

router.get('/getRetiroByUser/:id', [authJwt.verifyToken] ,retirosCtrl.getRetirosByUser);

router.put('/updateestado/:estado', [authJwt.verifyToken] ,retirosCtrl.updateEstadoPagado);

export default router;