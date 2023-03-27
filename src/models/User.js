import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = Schema({
    name: {type: String, require: true},
    last_name: {type: String, require: true},
    username: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    role: {type: String, require: true},
    question_points: {type: Number},
    match_points: {type: Number}
})

const User = mongoose.model('users', userSchema)

export default User;