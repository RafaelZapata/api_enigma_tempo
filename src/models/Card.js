import mongoose from "mongoose";

const Card = mongoose.model('Card', {
    name: String,
    attack: Number,
    health: Number,
    mana: Number,
    description: String,
    sprite: String,
    type: mongoose.Schema.Types.ObjectId,
    rarity: mongoose.Schema.Types.ObjectId,
    effect: String,
    params: String
});

export default Card;