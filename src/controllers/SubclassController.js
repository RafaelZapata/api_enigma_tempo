import Subclass from "../models/Subclass.js";

export default class SubclassController
{
    static async getAll(req, res)
    {
        try {
            const subclass = await Subclass.find();
            return res.json({subclasses: subclass});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const subclass = await Subclass.findById(req.params.id).populate();

            if(!subclass) return res.status(404).json({message: 'Subclass not found'});

            return res.json({class: subclass});
        } catch (error) {
            return res.status(404).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name} = req.body;
            const subclass = {name};

            let result = await Subclass.create(subclass);

            return res.status(201).json({message: 'Subclass inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name} = req.body;
            const subclass = {name}

            await Subclass.findByIdAndUpdate(req.params.id, subclass)

            return res.json({message: 'Subclass updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Subclass.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Subclass not found'});
               return res.json({message: 'Subclass deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}