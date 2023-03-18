import mongoose from "mongoose";
import { Schema } from "mongoose";

const heroSchema = Schema({
    name: {type: String},
    mana: {type: Number},
    hero_lines: {type: String},
    power: {type: String},
    params: {type: String}

})

const Hero = mongoose.model('heroes', heroSchema);

export default Hero;