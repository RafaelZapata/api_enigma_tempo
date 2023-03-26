import HeroEffectController from "../controllers/HeroEffectController.js";
import checkToken from "../middleware/CheckToken.js";

export default function heroEffectRoutes(app)
{
    app.get('/api/hero_effects', (req, res) => {
        return HeroEffectController.getAll(req, res);
    });
    
    app.get('/api/hero_effects/:id', (req, res) => {
        return HeroEffectController.get(req, res);
    });

    app.post('/api/hero_effects', (req, res) => {
        return HeroEffectController.insert(req, res);
    });

    app.patch('/api/hero_effects/:id', (req, res) => {
       return HeroEffectController.update(req, res); 
    });

    app.delete('/api/hero_effects/:id', (req, res) => {
        return HeroEffectController.delete(req, res);
    });
}