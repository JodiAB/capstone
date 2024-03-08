import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import router from './routes/items.js'
import userRouter from './routes/user.js'
import loginRouter from './routes/login.js'
import login from './middleware/Auth.js'
import cookieParser from 'cookie-parser';

config();

const PORT = process.env.PORT

const app = express();
app.use(cookieParser())
app.use(cors()); //middleware
app.use(express.json())
app.use('/product', router)
app.use('/users',userRouter)
app.use('/login',login,loginRouter);

app.listen(PORT, () =>
console.log(`Server is running on http://localhost:${PORT}`))
