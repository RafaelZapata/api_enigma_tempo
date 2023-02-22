import MatchController from "../controllers/MatchController.js";

export default function matchRoutes(app)
{
    app.get('/api/matches', (req, res) => {
        return MatchController.getAll(req, res);
    });

    app.get('/api/matches/:id', (req, res) => {
        return MatchController.get(req, res);
    });

    app.post('/api/matches', (req, res) => {
        return MatchController.insert(req, res);
    });

    app.patch('/api/matches/:id', (req, res) => {
       return MatchController.update(req, res); 
    });

    app.delete('/api/matches/:id', (req, res) => {
        return MatchController.delete(req, res);
    });
}