import {Router} from 'express'
const router = Router()
import {UserHandler} from './interfaces'
import controller from './controller'

router.get("/all", controller.getAll)





export default router