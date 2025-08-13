import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js';


const UserRouter = express.Router();

//login
UserRouter.post('/login', loginUser);
//register
UserRouter.post('/register', registerUser);

export default UserRouter;