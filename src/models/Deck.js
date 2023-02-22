import mongoose from "mongoose";
import { Schema } from "mongoose";

const deckSchema = Schema({
    name: {type: String},
    active: {type: Boolean},
    player: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    hero: {type: mongoose.Schema.Types.ObjectId, ref: 'heroes'},
    cards: {type: Array(mongoose.Schema.Types.ObjectId), ref: 'cards'},
})

const Deck = mongoose.model('Deck', deckSchema);

export default Deck;