import mongoose from "mongoose";

const user = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    role: String
})

export default user;