import { UserHandler } from "./interfaces"
import User from "./model"

const getOne :UserHandler['getOne'] = async (req, res, next) => {
    try {
        const {id } = req.params
        const userToFind = await User.findById(id)

        if(use)
        
   
        res.status(200).send({username: "Valère", id:"125256"})
    } catch (error) {
        next(error)
    }
}

export default getOne