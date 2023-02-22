import Card from "../models/Card.js";

export default class CardController
{
    static async getAll(req, res)
    {
        try {
            const cards = await Card.find().populate();
            return res.json({cards: cards});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const card = await Card.findById(req.params.id).populate();

            if(!card) return res.status(404).json({message: 'Carta não encontrada'});

            return res.json({card: card});
        } catch (error) {
            return res.status(404).json({message: "Card not found"});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, attack, health, mana, description, sprite, rarity, effect, params} = req.body;
            const card = {name, attack, health, mana, description, sprite, rarity, effect, params}

            let result = await Card.create(card);

            return res.status(201).json({message: 'Card inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, attack, health, mana, description, sprite, rarity, effect, params} = req.body;
            const card = {name, attack, health, mana, description, sprite, rarity, effect, params}

            await Card.findByIdAndUpdate(req.params.id, card).populate();

            return res.json({message: 'Card updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Card.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Card not found'});
               return res.json({message: 'Card deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}