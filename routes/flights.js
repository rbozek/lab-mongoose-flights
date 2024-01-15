import { Router } from 'express'

const router = Router()

// GET localhost:3000/flights
router.get('/', function(req, res) {
  res.render('index', { title: 'Flights index page, hopefully' })
})

export { router }