import { Router } from 'express';
import { getFilmsController } from './films.controller'

const router = Router()

/**
* @swagger
* /films:
*   get:
*     tags:
*       - Films
*     summary: Retrieves all films
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             title:
*               type: string
*             director:
*               type: string
*             budget:
*               type: number
*     responses:
*       200:
*         description: OK. Here are all of the films!
*       401:
*         description: Unauthorized. What exactly would you say you do here?
*       403:
*         description: Forbidden. You shall not pass.
*/
router.get('/', getFilmsController)

export default router