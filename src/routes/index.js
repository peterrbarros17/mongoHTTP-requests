import express from 'express'
import reviews from './reviewRoute.js'

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("Pioneer Players"))
    
    app.use(express.json(), reviews)
}

export default routes