import Effect from "../models/Effect.js";

export default class EffectController
{
    static async getAll(req, res)
    {
        try {
            const effects = await Effect.find();
            return res.json({effects: effects});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const effect = await Effect.findById(req.params.id);

            if(!effect) return res.status(404).json({message: 'Effect not found'});

            return res.json({effect: effect});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, effect, description, params} = req.body;
            const effect_model = {name, effect, description, params}

            let result = await Effect.create(effect_model);

            return res.status(201).json({message: 'Effect inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, effect, description, params} = req.body;
            const effect_model = {name, effect, description, params};

            await Effect.findByIdAndUpdate(req.params.id, effect_model)

            return res.json({message: 'Effect updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Effect.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Effect not found'});
               return res.json({message: 'Effect deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}