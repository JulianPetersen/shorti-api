import {Router} from 'express'

const router = Router();

import * as localNotification from '../controllers/localNotification.controller'
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], localNotification.createLocalNotification);

router.get('/',[authJwt.verifyToken], localNotification.getLocalNotification)

router.get('/notificationByUser/:userId',[authJwt.verifyToken], localNotification.getNotificationsByUser)

router.put('/updateReadUser', [authJwt.verifyToken], localNotification.updateReadNotification)

export default router;