import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: mongoose.Schema.Types.String, require: true},
    descricao: { type: mongoose.Schema.Types.String, require: true},
}, { versionKey: false})

const review = mongoose.model("review", reviewSchema)

export default review