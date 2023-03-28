import QuizController from "../controllers/QuizController.js";
import checkToken from "../middleware/CheckToken.js";

export default function quizRoutes(app)
{
    app.get('/api/quizzes', (req, res) => {
        return QuizController.getAll(req, res);
    });

    app.get('/api/quizzes/:id', (req, res) => {
        return QuizController.get(req, res);
    });

    app.post('/api/quizzes', (req, res) => {
        return QuizController.insert(req, res);
    });

    app.patch('/api/quizzes/:id', (req, res) => {
       return QuizController.update(req, res); 
    });

    app.delete('/api/quizzes/:id', (req, res) => {
        return QuizController.delete(req, res);
    });
}