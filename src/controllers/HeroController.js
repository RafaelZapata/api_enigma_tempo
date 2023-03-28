import Hero from "../models/Hero.js";

export default class HeroController
{
    static async getAll(req, res)
    {
        try {
            const heroes = await Hero.find().populate('effect').populate('acting');
            return res.json({heroes: heroes});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const hero = await Hero.findById(req.params.id).populate('effect').populate('acting');
            
            if(!hero) return res.status(404).json({message: 'Heroí não encontrada'});

            return res.json({hero: hero});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, mana, hero_lines, acting, effect, params} = req.body;
            const hero = {name, mana, hero_lines, acting, effect, params}

            let result = await Hero.create(hero);

            return res.status(201).json({message: 'Hero inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, mana, hero_lines, acting, effect, params} = req.body;
            const hero = {name, mana, hero_lines, acting, effect, params}

            await Hero.findByIdAndUpdate(req.params.id, hero);

            return res.json({message: 'Hero updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Hero.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Hero not found'});
               return res.json({message: 'Hero deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}