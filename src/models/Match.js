import mongoose, { Schema } from "mongoose";

const matchSchema = Schema({
    player: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    player_hero: {type: mongoose.Schema.Types.ObjectId, ref: 'heroes'},
    enemy_hero: {type: mongoose.Schema.Types.ObjectId, ref: 'heroes'},
    deck: {type: mongoose.Schema.Types.ObjectId, ref: 'decks'},
    starts: {type: String},
    ends: {type: String},
    result: {type: Boolean}
});

const Match = mongoose.model('matches', matchSchema);

export default Match;