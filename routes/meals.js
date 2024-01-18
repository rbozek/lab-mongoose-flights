import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'


const router = Router()

// GET localhost:3000/meals/new
router.get('/new', mealsCtrl.newMeal)
// GET localhost:3000/meals/
router.post('/', mealsCtrl.createMeal)

export { router }
