import 'dotenv/config';     // important to define it like this and at the top for all env variables to be initialized
import express from 'express';
import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';
import profileRouter from './routes/profile.js';
import authenticateJWTToken from './middlewares/authenticateJWTToken.js';

// initialize server
const PORT = process.env.PORT || 3000;
const app = express();

// middleware that executes for all requests, parsing json encoded bodies
app.use(express.json());

// import all subsections (routers) of the app
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use(authenticateJWTToken);  // used to authenticate JWT token in every route except login and signup
app.use("/profile", profileRouter);

// Start listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})