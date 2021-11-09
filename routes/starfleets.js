import { Router } from 'express'
import * as starfleetsCtrl from '../controllers/starfleets.js'
const router = Router()

router.get('/', isLoggedIn, starfleetsCtrl.index)
router.get('/new', isLoggedIn, starfleetsCtrl.new)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}