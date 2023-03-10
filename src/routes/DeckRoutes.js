import DeckController from "../controllers/DeckController.js";
import checkToken from "../middleware/CheckToken.js";

export default function deckRoutes(app)
{
    app.get('/api/decks', (req, res) => {
        return DeckController.getAll(req, res);
    });

    app.get('/api/decks/:id', (req, res) => {
        return DeckController.get(req, res);
    });

    app.post('/api/decks', (req, res) => {
        return DeckController.insert(req, res);
    });

    app.patch('/api/decks/:id', (req, res) => {
       return DeckController.update(req, res); 
    });

    app.delete('/api/decks/:id', (req, res) => {
        return DeckController.delete(req, res);
    });

    app.get('/api/decks/:player_id/:hero_id', (req, res) => {
        return DeckController.getByPlayerIdAndHeroId(req, res);
    });
}