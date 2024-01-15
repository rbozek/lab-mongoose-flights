import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// INITIAL CODE PRE-CONTROLLER localhost:3000/flights
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Flights index page, hopefully' })
// })

// GET http://localhost:3000/movies
router.get('/', flightsCtrl.index)

export {
  router
}


