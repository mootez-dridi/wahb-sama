const route = require('express').Router()
const congeModel = require('../models/demandeConge.model')





route.post('/adddemandeConge',(req,res,next)=>{
    congeModel
    .postNewDemandeConge(req.body.nom_demandeur,req.body.matricule_demandeur,req.body.direction_demandeur,req.body.matricule_responsable,req.body.type_absence,req.body.premier_jour,req.body.dernier_jour,req.body.etat)
    .then((doc)=>res.status(200).json({doc}))
    .catch((err)=>res.status(400).json({error:err||error}))
})


module.exports=route