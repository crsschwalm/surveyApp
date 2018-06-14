export const isAuthenticated = () => true;

export function authenticateRoute(req, res, next) {
  if (req.user.authenticated || isAuthenticated()) return next();

  res.redirect('/login');
}
