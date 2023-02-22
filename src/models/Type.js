import mongoose from "mongoose";

const Type = mongoose.model('Type', {
    name: String
});

export default Type;