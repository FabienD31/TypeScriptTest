import {UserHandler} from './interfaces'
import User from "./model"

const getAll: UserHandler["getAll"] = async (req,res,next) => {
    try{
        const userTab = await User.find()
        res.status(200).send(userTab)
      }catch ( error) {
        next(error)
      }
}


export default getAll