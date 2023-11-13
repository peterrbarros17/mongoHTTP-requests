import review from '../models/reviewModel.js'

class ReviewController{
    static async listaReviews(req, res){
        try{
            const listaDeReviews = await review.find({})
            res.status(200).json(listaDeReviews)
        }catch(erro){
            console.log({ message: `${erro} - falha na requisão`});
        }
    }
}

export default ReviewController