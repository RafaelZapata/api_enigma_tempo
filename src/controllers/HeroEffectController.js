import HeroEffect from "../models/HeroEffect.js";

export default class HeroEffectController
{
    static async getAll(req, res)
    {
        try {
            const hero_effects = await HeroEffect.find();
            return res.json({hero_effects: hero_effects});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const hero_effect = await HeroEffect.findById(req.params.id);

            if(!hero_effect) return res.status(404).json({message: 'HeroEffect not found'});

            return res.json({hero_effect: hero_effect});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, effect, description, params} = req.body;
            const hero_effect = {name, effect, description, params}

            let result = await HeroEffect.create(hero_effect);

            return res.status(201).json({message: 'HeroEffect inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, effect, description, params} = req.body;
            const hero_effect = {name, effect, description, params};

            await HeroEffect.findByIdAndUpdate(req.params.id, hero_effect);

            return res.json({message: 'HeroEffect updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await HeroEffect.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'HeroEffect not found'});
               return res.json({message: 'HeroEffect deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}