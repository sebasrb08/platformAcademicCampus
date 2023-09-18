import { Router } from "express";
import passport from "../auth/discordStrategy.js";

export const router = Router();

router.get('/login', passport.authenticate('discord'))

router.get('/redirect', passport.authenticate('discord', {
    successRedirect: "/Dashboard",
    failureRedirect: '/'
}))