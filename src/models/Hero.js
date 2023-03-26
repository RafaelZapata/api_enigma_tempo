import mongoose from "mongoose";
import { Schema } from "mongoose";

const heroSchema = Schema({
    name: {type: String},
    description: {type: String},
    sprite: {type: String},
    mana: {type: Number},
    hero_lines: {type: String},
    effect: {type: mongoose.Schema.Types.ObjectId, ref: "hero_effects"},
    params: {type: String}

})

const Hero = mongoose.model('heroes', heroSchema);

export default Hero;