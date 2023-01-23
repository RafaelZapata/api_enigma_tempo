import mongoose from "mongoose";

const Card = mongoose.model('Card', {
    name: String,
    attack: Number,
    health: Number,
    mana: Number,
    description: String,
    sprite: String,
    rarity: String,
    effect: String,
    params: String
});

export default Card;