import Class from "../models/Class.js";

export default class ClassController
{
    static async getAll(req, res)
    {
        try {
            const card_class = await Class.find();
            return res.json({class: card_class});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const card_class = await Class.findById(req.params.id).populate();

            if(!card_class) return res.status(404).json({message: 'Class not found'});

            return res.json({class: card_class});
        } catch (error) {
            return res.status(404).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name} = req.body;
            const card_class = {name};

            let result = await Class.create(card_class);

            return res.status(201).json({message: 'Class inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name} = req.body;
            const card_class = {name}

            await Class.findByIdAndUpdate(req.params.id, card_class)

            return res.json({message: 'Class updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Class.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Class not found'});
               return res.json({message: 'Class deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}