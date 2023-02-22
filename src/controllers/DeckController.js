import Deck from "../models/Deck.js";

export default class DeckController
{
    static async getAll(req, res)
    {
        try {
            const decks = await Deck.find().populate('player').populate('hero').populate('cards');
            return res.json({decks: decks});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const deck = await Deck.findById(req.params.id).populate('player').populate('hero').populate('cards');

            if(!deck) return res.status(404).json({message: 'Deck não encontrada'});

            return res.json({deck: deck});
        } catch (error) {
            return res.status(404).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, active, player, hero, cards} = req.body;
            const deck = {name, active: true, player, hero, cards}

            const result = await Deck.create(deck);

            return res.status(201).json({message: 'Deck inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, active, player, hero, cards} = req.body;
            const deck = {name, active, player, hero, cards}

            await Deck.findByIdAndUpdate(req.params.id, deck)

            return res.json({message: 'Deck updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Deck.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Deck not found'});
               return res.json({message: 'Deck deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}