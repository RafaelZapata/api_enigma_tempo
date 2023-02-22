import mongoose from "mongoose";
import { Schema } from "mongoose";

const typeSchema = Schema({
    name: {type: String}
})

const Type = mongoose.model('types', typeSchema);

export default Type;