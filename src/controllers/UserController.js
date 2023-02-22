import User from "../models/User.js";

export default class UserController
{
    static async get(req, res) 
    {
        try {
            const user = await User.find(req.params.id);
            if(!user) return res.status(404).json({message: 'User not found'});

            return res.json({me: user});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, email, password} = req.body;
            const user = {name, email, password, role: 'player'};

            const result = await User.create(user);

            return res.status(201).json({message: 'Created user successfully', user: result})
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async login(req, res)
    {
        try {
            const {email, password} = req.body;
            const user =  await User.findOne({email: email});

            if(!user)return res.status(403).json({message: 'Não permetido'});

            if(user.password === password)
            {
                return res.json({message: 'Logado'});
            }else {
                return res.status(403).json({message: 'Senha incorreta'});
            }
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }
}