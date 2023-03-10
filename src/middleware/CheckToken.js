import jwt from "jsonwebtoken";

export default function checkToken(req, res, next)
{
    try {
        const header = req.headers['authorization'];
        const token = header && header.split(' ')[1];
    
        if(!token) return res.status(401).json({message: 'Access denied'});

        const secret_key = process.env.SECRET;

        jwt.verify(token, secret_key);

        next()
        
    } catch (error) {
        return res.status(400).json({message: 'Invalid token!', error});
    }

}