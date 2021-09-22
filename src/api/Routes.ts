import {Router} from 'express'
const router = Router()
import user from './users/Routes'


router.use("/users", user)



export default router