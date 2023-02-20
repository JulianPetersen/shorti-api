import {Router} from 'express'

const router = Router();

import * as pronosticosCtrl from '../controllers/pronosticos.controller'
import { authJwt } from '../middlewares';


router.post('/', [authJwt.verifyToken] ,pronosticosCtrl.createPronostico);

router.get('/',[authJwt.verifyToken] , pronosticosCtrl.getPronosticos)

router.get('/:pronosticoId',[authJwt.verifyToken], pronosticosCtrl.getPronosticoById)

router.get('/getPronosticoByUser/:userId',[authJwt.verifyToken], pronosticosCtrl.getPronosticoByUser)

router.put('/:pronosticoId',[authJwt.verifyToken] ,pronosticosCtrl.updatePronostico)

// router.delete('/:partidoId',[authJwt.verifyToken, authJwt.isAdmin] ,partidosCtrl.deletePartido)

export default router;