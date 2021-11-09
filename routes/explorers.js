import { Router } from 'express'
import * as explorersCtrl from '../controllers/explorers.js'
const router = Router()

router.get('/', isLoggedIn, explorersCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}