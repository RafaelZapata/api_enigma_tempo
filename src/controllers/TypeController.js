import Type from "../models/Type.js";

export default class TypeController
{
    static async getAll(req, res)
    {
        try {
            const types = await Type.find();
            return res.json({types: types});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const type = await Type.findById(req.params.id);

            if(!type) return res.status(404).json({message: 'Type not found'});

            return res.json({type: type});
        } catch (error) {
            return res.status(404).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name} = req.body;
            const type = {name};

            const result = await Type.create(type);

            return res.status(201).json({message: 'Type inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name} = req.body;
            const type = {name};

            await Type.findByIdAndUpdate(req.params.id, type);

            return res.json({message: 'Type updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Type.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Type not found'});
               return res.json({message: 'Type deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}