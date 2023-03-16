import mongoose from "mongoose";
import { Schema } from "mongoose";

const subclassSchema = Schema({
    name: {type: String},
})

const Subclass = mongoose.model('subclasses', subclassSchema);

export default Subclass;