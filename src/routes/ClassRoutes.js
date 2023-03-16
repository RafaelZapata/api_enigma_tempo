import ClassController from "../controllers/ClassController.js";
import checkToken from "../middleware/CheckToken.js";

export default function classRoutes(app)
{
    app.get('/api/classes', (req, res) => {
        return ClassController.getAll(req, res);
    });

    app.get('/api/classes/:id', (req, res) => {
        return ClassController.get(req, res);
    });

    app.post('/api/classes', (req, res) => {
        return ClassController.insert(req, res);
    });

    app.patch('/api/classes/:id', (req, res) => {
       return ClassController.update(req, res); 
    });

    app.delete('/api/classes/:id', (req, res) => {
        return ClassController.delete(req, res);
    });
}