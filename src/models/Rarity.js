import mongoose from "mongoose";
import { Schema } from "mongoose";

const raritySchema = Schema({
    name: {type: String}
})

const Rarity = mongoose.model('rarities', raritySchema);

export default Rarity;