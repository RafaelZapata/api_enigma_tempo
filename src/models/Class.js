import mongoose from "mongoose";
import { Schema } from "mongoose";

const classSchema = Schema({
    name: {type: String},
})

const Class = mongoose.model('classes', classSchema);

export default Class;