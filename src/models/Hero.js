import mongoose from "mongoose";

const Hero = mongoose.model('Hero', {
    name: String,
    hero_lines: String
});

export default Hero;