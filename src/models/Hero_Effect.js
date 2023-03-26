import mongoose from "mongoose";
import { Schema } from "mongoose";

const heroEffectSchema = Schema({
    name: {type: String},
    effect: {type: String},
    description: {type: String},
    params: {type: String},
})

const HeroEffect = mongoose.model('hero_effects', heroEffectSchema);

export default HeroEffect;