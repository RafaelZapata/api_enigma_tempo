import UserController from "../controllers/UserController.js";

export default function userRoutes(app)
{
    app.post('/api/login', (req, res) =>{
        return UserController.login(req, res);
    });

    app.post('/api/register', (req, res) =>{
        return UserController.insert(req, res);
    });

    app.get('/api/user', (req, res) =>{
        return UserController.get(req, res);
    });
}