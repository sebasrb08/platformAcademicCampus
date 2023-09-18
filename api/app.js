import express from 'express'
import passport from 'passport';
import { router as routerAuth } from './routes/auth.routes.js';
import session from "express-session";
import { config } from 'dotenv';
config()
export const app = express()


app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.json());


app.use('/auth', routerAuth)

