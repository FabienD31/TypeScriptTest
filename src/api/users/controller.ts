import getAll from './getAll'
import getOne from './getOne'
import {UserHandler} from './interfaces'

const controller: UserHandler = {
    getAll,
    getOne
}
export default controller