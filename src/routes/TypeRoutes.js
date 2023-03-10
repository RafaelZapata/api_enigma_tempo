import TypeController from "../controllers/TypeController.js";
import checkToken from "../middleware/CheckToken.js";

export default function typesRoutes(app)
{
    app.get('/api/types', (req, res) => {
        return TypeController.getAll(req, res);
    });

    app.get('/api/types/:id', (req, res) => {
        return TypeController.get(req, res);
    });

    app.post('/api/types', (req, res) => {
        return TypeController.insert(req, res);
    });

    app.patch('/api/types/:id', (req, res) => {
       return TypeController.update(req, res); 
    });

    app.delete('/api/types/:id', (req, res) => {
        return TypeController.delete(req, res);
    });
}