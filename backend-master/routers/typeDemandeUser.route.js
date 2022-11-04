const  route  = require('express').Router()

const typeDemandeUserModel=require('../models/typeDemandeUser.model')






route.delete('/typedemande/:id/:demande/:responsable',(req,res,next)=>{
    typeDemandeUserModel.deleteOneTypeDemande(req.params.id,req.params.demande,req.params.responsable)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})









module.exports = route