import { checkUser } from '../models/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res, next) => {
    try {
        const { userEmail, userPass } = req.body;
        const hashedPassword = await checkUser(userEmail);
        
        const result = await bcrypt.compare(userPass, hashedPassword);
        if (result === true) {
            const token = jwt.sign({ email: userEmail }, process.env.SECRET_KEY, { expiresIn: '3m' });
            res.json({
                token: token,
                msg: 'You have logged in successfully'
            });
        } else {
            res.status(401).json({
                msg: 'Invalid email or password'
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};

export default login;
