import mongoose from "mongoose";
import { Schema } from "mongoose";

const cardSchema = Schema({
    name: {type: String},
    attack: {type: Number},
    health: {type: Number},
    mana: {type: Number},
    description: {type: String},
    sprite: {type: String},
    type: {type: mongoose.Schema.Types.ObjectId, ref: "types"},
    rarity: {type: mongoose.Schema.Types.ObjectId, ref: "rarities"},
    card_class: {type: mongoose.Schema.Types.ObjectId, ref: "classes"},
    subclass: {type: mongoose.Schema.Types.ObjectId, ref: "subclasses"},
    effect: {type: String},
    params: {type: String},
})

const Card = mongoose.model('cards', cardSchema);

export default Card;