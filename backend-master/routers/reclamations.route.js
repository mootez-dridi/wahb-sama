const route = require('express').Router()
const reclamationsModel = require('../models/reclamations.model')





route.post('/adddemande',(req,res,next)=>{
    reclamationsModel
    .postNewDemandeFourniture(req.body.nom_demandeur,req.body.matricule_demandeur,req.body.direction_demandeur,req.body.matricule_responsable,req.body.besoin,req.body.etat)
    .then((doc)=>res.status(200).json({doc}))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demandeUser/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourUser(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser2/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourUser2(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser3/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourUser3(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeUser4/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourUser4(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demandeResponsable/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourResponsable(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demande/:id',(req,res,next)=>{
    reclamationsModel.getOneDmdFour(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})
route.get('/demande',(req,res,next)=>{
    reclamationsModel.getDmdFourChf()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/demande/:id',(req,res,next)=>{
    reclamationsModel.updateDmdFour(req.params.id,req.body.matricule_responsable,req.body.etat)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})
route.patch('/demande/:id',(req,res,next)=>{
    reclamationsModel.updateDmdFourChFour(req.params.id,req.body.etat)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})



route.get('/demande_ACCEPTER',(req,res,next)=>{
    reclamationsModel
    .getDmdaccp()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demande_APP',(req,res,next)=>{
    reclamationsModel
    .getDmdappr()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demande_REF',(req,res,next)=>{
    reclamationsModel
    .getDmdref()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})
route.get('/demande_ATT',(req,res,next)=>{
    reclamationsModel
    .getDmdatt()
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/demandeUserAtt/:matricule',(req,res,next)=>{
    reclamationsModel
    .getDmdFourUserCountAtt(req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json({error:err||error}))
})

module.exports=route