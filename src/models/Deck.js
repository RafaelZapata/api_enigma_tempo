import mongoose from "mongoose";

const deck = mongoose.model('Deck', {
    player: mongoose.Schema.Types.ObjectId,
    cards: mongoose.Schema.Types.ObjectId
});

export default deck;