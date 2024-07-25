import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
}
declare const User: mongoose.Model<IUser, {}, {}>;
export default User;
