import { Router } from "express";
import passport from "../auth/discordStrategy.js";
import { isNotAuthorized } from "../middlewares/auth.js";

export const router = Router();

router.get('/login',isNotAuthorized, passport.authenticate('discord'))

router.get('/redirect', passport.authenticate('discord', {
    successRedirect: "/Dashboard",
    failureRedirect: '/'
}))

router.get('/logout', (req,res)=>{
    if(req.user) req.logout()
    res.redirect('/')
})