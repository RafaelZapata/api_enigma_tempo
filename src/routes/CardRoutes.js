import CardController from "../controllers/CardController.js";
import checkToken from "../middleware/CheckToken.js";

export default function cardRoutes(app)
{
    app.get('/api/cards', (req, res) => {
        return CardController.getAll(req, res);
    });

    app.get('/api/cards/:id', (req, res) => {
        return CardController.get(req, res);
    });

    app.post('/api/cards', (req, res) => {
        return CardController.insert(req, res);
    });

    app.patch('/api/cards/:id', (req, res) => {
       return CardController.update(req, res); 
    });

    app.delete('/api/cards/:id', (req, res) => {
        return CardController.delete(req, res);
    });
}