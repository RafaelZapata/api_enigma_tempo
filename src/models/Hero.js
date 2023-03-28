import mongoose from "mongoose";
import { Schema } from "mongoose";

const heroSchema = Schema({
    name: {type: String},
    description: {type: String},
    sprite: {type: String},
    mana: {type: Number},
    hero_lines: {type: String},
    acting: {type: mongoose.Schema.Types.ObjectId, ref: "classes"},
    effect: {type: mongoose.Schema.Types.ObjectId, ref: "effects"},
    params: {type: String}

})

const Hero = mongoose.model('heroes', heroSchema);

export default Hero;