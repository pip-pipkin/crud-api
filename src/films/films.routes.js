import { Router } from 'express';
import { getFilmsController } from './films.controller'

const router = Router()

router.get('/', getFilmsController)

export default router