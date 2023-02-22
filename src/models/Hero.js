import mongoose from "mongoose";
import { Schema } from "mongoose";

const heroSchema = Schema({
    name: {type: String},
    hero_lines: {type: String}
})

const Hero = mongoose.model('heroes', heroSchema);

export default Hero;