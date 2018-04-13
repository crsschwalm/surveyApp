import passport from 'passport';
import User from '../models/User';
import LocalStrategy from 'passport-local';
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export function register(req, res) {
  return User.register(
    new User({ username: req.body.username }),
    req.body.password
  ).catch(err => {
    //TODO - Handle when registration fails (user already exisits)
    console.error(err);
    res.redirect('/register/error');
    throw err;
  });
}

export function login(req, res) {
  passport.authenticate('local')(req, res, () => res.redirect('/'));
}

export function logout(req, res) {
  req.logout();
  res.redirect('/login');
}

export function isAuthenticated(req, res, next) {
  if (req.user.authenticated) return next();

  res.redirect('/login');
}
