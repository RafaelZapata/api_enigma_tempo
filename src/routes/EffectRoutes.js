import EffectController from "../controllers/EffectController.js";
import checkToken from "../middleware/CheckToken.js";

export default function effectRoutes(app)
{
    app.get('/api/effects', (req, res) => {
        return EffectController.getAll(req, res);
    });
    
    app.get('/api/effects/:id', (req, res) => {
        return EffectController.get(req, res);
    });

    app.post('/api/effects', (req, res) => {
        return EffectController.insert(req, res);
    });

    app.patch('/api/effects/:id', (req, res) => {
       return EffectController.update(req, res); 
    });

    app.delete('/api/effects/:id', (req, res) => {
        return EffectController.delete(req, res);
    });
}