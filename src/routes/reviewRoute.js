import express from 'express'
import ReviewController from '../controllers/reviewController.js'

const route = express.Router()

route.get("/reviews", ReviewController.listaReviews)

export default route