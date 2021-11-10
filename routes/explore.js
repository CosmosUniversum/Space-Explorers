import { Router } from 'express'
import * as exploreCtrl from '../controllers/explore.js'
const router = Router()

router.get('/', isLoggedIn, exploreCtrl.index)
router.post('/', isLoggedIn, exploreCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


export {
  router
}