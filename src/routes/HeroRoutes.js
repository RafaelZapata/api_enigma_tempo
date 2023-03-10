import HeroController from "../controllers/HeroController.js";
import checkToken from "../middleware/CheckToken.js";

export default function heroRoutes(app)
{
    app.get('/api/heroes', (req, res) => {
        return HeroController.getAll(req, res);
    });

    app.get('/api/heroes/:id', (req, res) => {
        return HeroController.get(req, res);
    });

    app.post('/api/heroes', (req, res) => {
        return HeroController.insert(req, res);
    });

    app.patch('/api/heroes/:id', (req, res) => {
       return HeroController.update(req, res); 
    });

    app.delete('/api/heroes/:id', (req, res) => {
        return HeroController.delete(req, res);
    });
}