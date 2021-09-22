import  { RequestHandler , NextFunction}  from "express"; 
import { IUser } from "./model";


export interface UserHandler {
    getAll : RequestHandler<Record<string,never>,IUser[],NextFunction>,
    getOne: RequestHandler<{id: string}, {username: string, id: string}, NextFunction>
}