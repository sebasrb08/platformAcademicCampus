// passportHelper.js
import passport from "passport";
import { Strategy as DiscordStrategy} from 'passport-discord'
import { config } from "dotenv";
import { log } from "console";

config()


passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: '/auth/redirect',
    scope: ['identify', 'guilds', 'email']
}, (accestoken, refreshtoken, profile, done) =>{
  try {
    console.log(profile);
  } catch (error) {
    console.error(error);
    return done(error, null)
  }
}))


passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((user, done) => done(null, user));

export default passport;