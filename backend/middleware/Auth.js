// Node.js environment using CommonJS syntax
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {checkUser} from '../models/database.js'
import { log } from 'console';

// function createToken(user) {
//     return jwt.sign({
//         emailAdd: user.emailAdd,
//         userPwd: user.userPwd
//     }, process.env.SECRET_KEY, {
//         expiresIn: '1h'
//     });
// }

// function verifyAToken(req, res, next) {
//     const token = req.headers['authorization'];
//     if (token) {
//         try {
//             jwt.verify(token, process.env.SECRET_KEY);
//             next();
//         } catch (error) {
//             res.json({
//                 status: res.statusCode,
//                 msg: "Please provide the correct credentials."
//             });
//             next()
//         }
//     } else {
//         res.json({
//             status: res.statusCode,
//             msg: "Please login."
//         });
//     }
// }

// app.post('/login',verifyAToken,(req,res,next){

// })

// module.exports = {
//     createToken,
//     verifyAToken
// };

const login = async (req, res, next) => {
    try{
        const {userEmail, userPass} = req.body;
        console.log(userEmail);

        const hashedPassword = await checkUser(userEmail);
        bcrypt.compare(userPass, hashedPassword,(err,result)=>{
            if(err) throw err;
            if (result === true){
                console.log(userEmail);
                const token = jwt.sign({email:userEmail},process.env.SECRET_KEY,{expiresIn: '6m'})
                console.log(token);
                res.send({
                    token: token,
                    msg:'You have successfully logged in'
                });
            }else{
                res.send({
                    msg:'invalid email or password'
                })
            }
        })
    }catch(error){
        console.error('Invalid email or password', error);
        res.status(404).send('Invalid email or password');
    }
}

export default login