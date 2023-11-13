import express from 'express'
import ReviewController from '../controllers/reviewController.js'

const route = express.Router()

route.get("/reviews", ReviewController.listarReviews)

route.get("/reviews/:id", ReviewController.listarReviewPorId)

route.post("/reviews", ReviewController.cadastrarReview)

route.put("/reviews/:id", ReviewController.atualizarReview)

route.delete("/reviews/:id", ReviewController.excluirReview)

export default route