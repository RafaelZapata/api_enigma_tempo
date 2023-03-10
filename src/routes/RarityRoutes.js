import RarityController from "../controllers/RarityController.js";
import checkToken from "../middleware/CheckToken.js";

export default function rarityRoutes(app)
{
    app.get('/api/rarities', (req, res) => {
        return RarityController.getAll(req, res);
    });

    app.get('/api/rarities/:id', (req, res) => {
        return RarityController.get(req, res);
    });

    app.post('/api/rarities', (req, res) => {
        return RarityController.insert(req, res);
    });

    app.patch('/api/rarities/:id', (req, res) => {
       return RarityController.update(req, res); 
    });

    app.delete('/api/rarities/:id', (req, res) => {
        return RarityController.delete(req, res);
    });
}