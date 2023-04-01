import mongoose from "mongoose";
import { Schema } from "mongoose";

const cardSchema = Schema({
    name: {type: String},
    attack: {type: Number},
    health: {type: Number},
    mana: {type: Number},
    description: {type: String},
    context: {type: String},
    context_in_game: {type: String},
    sprite: {type: String},
    type: {type: mongoose.Schema.Types.ObjectId, ref: "types"},
    rarity: {type: mongoose.Schema.Types.ObjectId, ref: "rarities"},
    acting: {type: mongoose.Schema.Types.ObjectId, ref: "classes"},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "subclasses"},
    effect: {type: mongoose.Schema.Types.ObjectId, ref: "effects"},
    params: {type: String},
    restrict_acting: {type: Boolean}
})

const Card = mongoose.model('cards', cardSchema);

export default Card;
