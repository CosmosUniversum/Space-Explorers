import { Router } from 'express'
import * as explorationsCtrl from '../controllers/explorations.js'
const router = Router()

router.get('/', isLoggedIn, explorationsCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}