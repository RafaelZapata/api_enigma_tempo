import Rarity from "../models/Rarity.js";

export default class RarityController
{
    static async getAll(req, res)
    {
        try {
            const raritys = await Rarity.find();
            console.log(raritys);
            return res.json({raritys: raritys});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const rarity = await Rarity.findById(req.params.id);

            if(!rarity) return res.status(404).json({message: 'Rarity not found'});

            return res.json({rarity: rarity});
        } catch (error) {
            return res.status(404).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async insert(req, res)
    {
        try {
            let result = await Rarity.create(req.body.name);

            return res.status(201).json({message: 'Rarity inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const result = await Rarity.findByIdAndUpdate(req.params.id, req.body.name);

            return res.json({message: 'Rarity updated', rarity: rarity});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Rarity.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Rarity not found'});
               return res.json({message: 'Rarity deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}