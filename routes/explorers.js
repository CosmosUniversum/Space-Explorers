import { Router } from 'express'
import * as explorersCtrl from '../controllers/explorers.js'
const router = Router()

router.get('/', explorersCtrl.index)