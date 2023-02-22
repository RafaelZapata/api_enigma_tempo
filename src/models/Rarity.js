const { default: mongoose } = require("mongoose");

const rarity = mongoose.model('Rarity', {
    name: String
});

export default rarity;