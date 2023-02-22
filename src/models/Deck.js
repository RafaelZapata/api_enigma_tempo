import mongoose from "mongoose";

const Deck = mongoose.model('Deck', {
    name: String,
    active: Boolean,
    player: mongoose.Schema.Types.ObjectId,
    hero: mongoose.Schema.Types.ObjectId,
    cards: Array(mongoose.Schema.Types.ObjectId)
});

export default Deck;