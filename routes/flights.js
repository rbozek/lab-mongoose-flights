import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// INITIAL CODE PRE-CONTROLLER localhost:3000/flights
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Flights index page, hopefully' })
// })

// GET http://localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET http://localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// POST http://localhost:3000/flights
router.post('/', flightsCtrl.create)
// DELETE http://localhost:3000/flights/:movieId
router.delete('/:flightId', flightsCtrl.delete)
// DETAILS/show http://localhost:3000/flights/:flightId
router.get('/:flightId', flightsCtrl.show)
// SHOW EDIT VIEW http://localhost:3000/flights/:flightId/edit
router.get("/:flightId/edit", flightsCtrl.edit)
// UPDATE (from edit view) http://localhost:3000/flights/:flightId
router.put("/:flightId", flightsCtrl.update)

export {
  router
}
