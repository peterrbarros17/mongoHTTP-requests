import review from '../models/reviewModel.js'

class ReviewController{
    static async listarReviews(req, res){
        try{
            const listaDeReviews = await review.find({})
            res.status(200).json(listaDeReviews)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisão`})
        }
    }

    static async listarReviewPorId(req, res){
        try{
            const id = req.params.id
            const reviewEncontrada = await review.findById(id)
            res.status(200).json(reviewEncontrada)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisão`})
        }
    }

    static async cadastrarReview(req, res){
        try{
            const novaReview = await review.create(req.body)
            res.status(201).json({ message: "review cadastrada com sucesso", review: novaReview})
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar review`})
        }
    }

    static async atualizarReview(req, res){
        try{
            const id = req.params.id
            await review.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Review atualizada"})
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao atualizar review`})
        }
    }

    static async excluirReview(req, res){
        try{
            const id = req.params.id
            await review.findByIdAndDelete(id)
            res.status(200).json({ message: "Review removida"})
        }catch(erro){
            res.status(500).json({ messagee: `${erro.message} - falha ao excluir review`})
        }
    }
}

export default ReviewController