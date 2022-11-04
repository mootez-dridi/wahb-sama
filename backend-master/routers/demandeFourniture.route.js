const route = require('express').Router()
const fournitureModel = require('../models/demandeFourniture.model')





route.post('/adddemande',(req,res,next)=>{
    fournitureModel
    .postNewDemandeFourniture(req.body.nom_demandeur,req.body.matricule_demandeur,req.body.direction_demandeur,req.body.matricule_responsable,req.body.besoin,req.body.etat)
    .then((doc)=>res.status(200).json({doc}))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demandeUser/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourUser(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser2/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourUser2(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser3/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourUser3(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser4/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourUser4(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeResponsable/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourResponsable(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demande/:id',(req,res,next)=>{
    fournitureModel.getOneDmdFour(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})
route.get('/demande',(req,res,next)=>{
    fournitureModel.getDmdFourChf()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/demande/:id',(req,res,next)=>{
    fournitureModel.updateDmdFour(req.params.id,req.body.matricule_responsable,req.body.etat)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})
route.patch('/demande/:id',(req,res,next)=>{
    fournitureModel.updateDmdFourChFour(req.params.id,req.body.etat)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})



route.get('/demande_ACCEPTER',(req,res,next)=>{
    fournitureModel
    .getDmdaccp()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demande_APP',(req,res,next)=>{
    fournitureModel
    .getDmdappr()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demande_REF',(req,res,next)=>{
    fournitureModel
    .getDmdref()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demande_ATT',(req,res,next)=>{
    fournitureModel
    .getDmdatt()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demandeUserAtt/:matricule',(req,res,next)=>{
    fournitureModel
    .getDmdFourUserCountAtt(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

module.exports=route