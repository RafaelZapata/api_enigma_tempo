import UserController from "../controllers/UserController.js";
import checkToken from "../middleware/CheckToken.js";

export default function userRoutes(app)
{
    app.post('/api/login', (req, res) =>{
        return UserController.login(req, res);
    });

    app.post('/api/register', (req, res) =>{
        return UserController.insert(req, res);
    });

    app.get('/api/user/:id', (req, res) =>{
        return UserController.get(req, res);
    });
    
    app.get('/api/user/', (req, res) =>{
        return UserController.getAll(req, res);
    });
}
