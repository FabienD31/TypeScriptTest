import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string
}
const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

export default mongoose.model<IUser>('User', userSchema)