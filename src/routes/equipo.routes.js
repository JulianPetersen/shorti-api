import { Router } from "express";
import upload from '../middlewares/multer'

const router = Router();
import *as teamCtrl from '../controllers/equipo.controller'
import {authJwt} from '../middlewares'



router.post('/',[authJwt.verifyToken, authJwt.isAdmin],upload.single('imgUrl'),teamCtrl.createTeam)
router.get('/', [authJwt.verifyToken],teamCtrl.getTeams);
router.get('/:teamId', [authJwt.verifyToken],teamCtrl.getTeamById);
router.get('/getTeamByLiga/:ligaId', [authJwt.verifyToken],teamCtrl.getTeamByLigaId);
router.put('/:teamId', [authJwt.verifyToken, authJwt.isAdmin],upload.single('imgUrl'),teamCtrl.updateTeam);
router.delete('/:teamId', [authJwt.verifyToken, authJwt.isAdmin],teamCtrl.deleteTeam)


export default router