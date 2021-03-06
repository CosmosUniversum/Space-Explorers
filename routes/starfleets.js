import { Router } from 'express'
import * as starfleetsCtrl from '../controllers/starfleets.js'
const router = Router()

router.get('/', isLoggedIn, starfleetsCtrl.index)
router.get('/:id', isLoggedIn, starfleetsCtrl.show)
router.get('/new', isLoggedIn, starfleetsCtrl.new)
router.post('/', isLoggedIn, starfleetsCtrl.create)
router.post('/:id', isLoggedIn, starfleetsCtrl.addToStarfleet)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}