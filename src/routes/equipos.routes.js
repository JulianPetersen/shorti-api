import {Router} from 'express'

const router = Router();
import * as equiposCtrl from '../controllers/equipo.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken] ,equiposCtrl.createEquipo)

router.get('/',[authJwt.verifyToken] , equiposCtrl.getEquipos)

// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId',authJwt.verifyToken ,productsCtrl.updateProductsById)

// router.delete('/:producId',[authJwt.verifyToken, authJwt.isModerator] ,productsCtrl.deleteProductById)

export default router;