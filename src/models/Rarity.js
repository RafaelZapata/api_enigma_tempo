import mongoose from "mongoose";

const Rarity = mongoose.model('Rarity', {
    name: String
});

export default Rarity;