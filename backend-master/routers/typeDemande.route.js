const typeDemandeModel=require('../models/typeDemande.model')
const  route  = require('express').Router()





route.get('/',(req,res,next)=>{
    directionModel.testConnect()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

// route.post('/add_typeDemande',(req,res,next)=>{
//     typeDemandeModel.postNewTypeDemande(req.body.demande,req.body.responsable)
//     .then((msg)=>res.send({msg}))
//     .catch((err)=>res.status(400).json(err))
// })

route.post('/addtype',(req,res,next)=>{
    typeDemandeModel
    .postNewType(req.body.demande,req.body.responsable)
    .then((msg)=>res.status(200).json({msg}))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/typeDemandes',(req,res,next)=>{
    typeDemandeModel.getAllDemande()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

route.get('/typeDemande/:id',(req,res,next)=>{
    typeDemandeModel.getOneTypeDemande(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/typeDemande/:id',(req,res,next)=>{
    typeDemandeModel.updateTypeDemande(req.params.id ,req.body.responsable)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
}) 



module.exports=route