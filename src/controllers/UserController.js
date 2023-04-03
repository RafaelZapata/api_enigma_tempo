import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

export default class UserController
{
    static async getAll(req, res)
    {
        try {
            const users = await User.find({}, '-password');
            return res.json({users: users});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }
    
    static async get(req, res) 
    {
        try {
            const user = await User.findById(req.params.id, '-password');
            if(!user) return res.status(404).json({message: 'User not found'});

            return res.json({me: user});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async insert(req, res)
    {
        try {
            const {name, last_name, username, email , password} = req.body;
            const user = {name, last_name, username, email, password, role: 'admin', question_points: 0, match_points: 0};

            if(!name) return res.status(422).json({message: 'Name is required'});

            if(!username) return res.status(422).json({message: 'Username is required'});
            
            if(!email) return res.status(422).json({message: 'Email is required'});
            
            if(!password) return res.status(422).json({message: 'Password is required'});
           
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            
            user.password = passwordHash;

            const usernameExists = await User.findOne({username: username});
            if(usernameExists) return res.status(422).json({code: 1, message: 'Username already exists'});
            
            const emailExists = await User.findOne({email: email});
            if(emailExists) return res.status(422).json({code: 2, message: 'Email already exists'});

            await User.create(user);

            return res.status(201).json({message: 'Created user successfully'})
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async login(req, res)
    {
        try {
            const {username, password} = req.body;

            if(!username) return res.status(422).json({message: 'Username is required'});

            if(!password) return res.status(422).json({message: 'Password is required'});

            const user =  await User.findOne({username: username});

            if(!user)return res.status(404).json({message: 'User not found'});

            const checkPassword = await bcrypt.compare(password, user.password);

            if(!checkPassword) return res.status(422).json({message: 'Password did not match'});

            const secret_key = process.env.SECRET;

            const token = jwt.sign({id: user._id}, secret_key);
            
            return res.json({message: 'Logged in', token: token, user: user});
        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad Request ', error});
        }
    }

    static async update(req, res)
    {
        try {
            const {name, last_name, username, email, password, role, question_points, match_points} = req.body;
            const user = {name, last_name, username, email, password, role, question_points, match_points}

            await User.findByIdAndUpdate(req.params.id, user)

            return res.json({message: 'User updated'});

        } catch (error) {
            return res.status(500).json({message: 'Erro inesperado. Bad request', error});
        }
    }
}
