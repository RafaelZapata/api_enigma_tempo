import SubclassController from "../controllers/SubclassController.js";
import checkToken from "../middleware/CheckToken.js";

export default function subclassRoutes(app)
{
    app.get('/api/subclasses', (req, res) => {
        return SubclassController.getAll(req, res);
    });

    app.get('/api/subclasses/:id', (req, res) => {
        return SubclassController.get(req, res);
    });

    app.post('/api/subclasses', (req, res) => {
        return SubclassController.insert(req, res);
    });

    app.patch('/api/subclasses/:id', (req, res) => {
       return SubclassController.update(req, res); 
    });

    app.delete('/api/subclasses/:id', (req, res) => {
        return SubclassController.delete(req, res);
    });
}