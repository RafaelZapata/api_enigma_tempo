import Quiz from "../models/Quiz.js";

export default class QuizController
{
    static async getAll(req, res)
    {
        try {
            const quizzes = await Quiz.find();
            return res.json({quizzes: quizzes});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async get(req, res)
    {
        try {
            const quiz = await Quiz.findById(req.params.id).populate();

            if(!quiz) return res.status(404).json({message: 'Carta não encontrada'});

            return res.json({quiz: quiz});
        } catch (error) {
            return res.status(404).json({message: "Quiz not found"});
        }
    }

    static async insert(req, res)
    {
        try {
            const {theme, question, options, answer} = req.body;
            const quiz = {theme, question, options, answer}

            let result = await Quiz.create(quiz);

            return res.status(201).json({message: 'Quiz inserted', result});
        } catch (error) {
            return res.status(500).json({message: "Erro inesperado. Bad request ", error});
        }
    }

    static async update(req, res)
    {
        try {
            const {theme, question, options, answer} = req.body;
            const quiz = {theme, question, options, answer}
            
            await Quiz.findByIdAndUpdate(req.params.id, quiz)

            return res.json({message: 'Quiz updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }

    static async delete(req, res)
    {
        try {
               const result = await Quiz.findByIdAndDelete(req.params.id);
               if(!result) return res.status(404).json({message: 'Quiz not found'});
               return res.json({message: 'Quiz deleted'});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}