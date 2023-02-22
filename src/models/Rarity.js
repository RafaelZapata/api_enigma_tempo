import mongoose from "mongoose";

const rarity = mongoose.model('Rarity', {
    name: String
});

export default rarity;