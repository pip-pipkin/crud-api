import { Router } from 'express'
import filmRoutes from './films/films.routes'

const router = Router();

router.use('/films', filmRoutes)

export default router