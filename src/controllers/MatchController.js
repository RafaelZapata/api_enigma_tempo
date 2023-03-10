import Match from "../models/Match.js";

export default class MatchController
{
    static async getAll(req, res)
    {
        try {
            const matches = await Match.find().populate('player').populate('player_hero').populate('deck').populate('enemy_hero');
            return res.json({matches: matches});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const match = await Match.findById(req.params.id).populate('player').populate('player_hero').populate('deck').populate('enemy_hero');

            if(!match) return res.status(404).json({message: 'Match não encontrada'});

            return res.json({match: match});
        } catch (error) {
            return res.status(404).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {player, player_hero, enemy_hero, deck, starts, ends, result} = req.body;
            const match = {player, player_hero, enemy_hero, deck, starts, ends, result}

            const r = await Match.create(match);

            return res.status(201).json({message: 'Match inserted', r});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, active, player, hero, cards} = req.body;
            const match = {name, active, player, hero, cards}

            await Match.findByIdAndUpdate(req.params.id, match)

            return res.json({message: 'Match updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Match.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Match not found'});
               return res.json({message: 'Match deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}