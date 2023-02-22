import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true}
})

const User = mongoose.model('users', userSchema)

export default User;