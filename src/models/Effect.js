import mongoose from "mongoose";
import { Schema } from "mongoose";

const effectSchema = Schema({
    name: {type: String},
    effect: {type: String},
    description: {type: String},
    params: {type: String},
})

const Effect = mongoose.model('effects', effectSchema);

export default Effect;