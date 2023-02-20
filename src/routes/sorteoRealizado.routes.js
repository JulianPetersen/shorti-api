import {Router} from 'express'

const router = Router();

import * as sorteoRealizadoCtrl from '../controllers/sorteoRealizado.controller'
import { authJwt } from '../middlewares';


router.post('/', [authJwt.verifyToken] ,sorteoRealizadoCtrl.createSorteoRealizado);

router.get('/',[authJwt.verifyToken] , sorteoRealizadoCtrl.getSorteoRealizado)

// router.get('/:pronosticoId',[authJwt.verifyToken], pronosticosCtrl.getPronosticoById)

// router.get('/getPronosticoByUser/:userId',[authJwt.verifyToken], pronosticosCtrl.getPronosticoByUser)

// router.put('/:pronosticoId',[authJwt.verifyToken] ,pronosticosCtrl.updatePronostico)

// router.delete('/:partidoId',[authJwt.verifyToken, authJwt.isAdmin] ,partidosCtrl.deletePartido)

export default router;