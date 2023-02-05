import rarityController from "../controllers/RarityController.js";

export default function rarityRoutes(app)
{
    app.get('/api/rarities', (req, res) => {
        return rarityController.getAll(req, res);
    });

    app.get('/api/rarities/:id', (req, res) => {
        return rarityController.get(req, res);
    });

    app.post('/api/rarities', (req, res) => {
        return rarityController.insert(req, res);
    });

    app.patch('/api/rarities/:id', (req, res) => {
       return rarityController.update(req, res); 
    });

    app.delete('/api/rarities/:id', (req, res) => {
        return rarityController.delete(req, res);
    });
}