const  route  = require('express').Router()
const technoModel=require('../models/techno.model')



route.get('/',(req,res,next)=>{
    technoModel.testConnect()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})


route.post('/addtechno',(req,res,next)=>{
    technoModel
    .postNewTechno(req.body.nomsite, req.body.deuxg, req.body.threeg, req.body.fourg, req.body.tcu, req.body.abis)
    .then((techno)=>res.status(200).json({techno:techno,msg:'techno added !!'}))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.get('/techno',(req,res,next)=>{
    technoModel.getAllTechno()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

route.get('/techno/:id',(req,res,next)=>{
    technoModel.getOneTechno(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/techno/:id',(req,res,next)=>{
    technoModel.updateTechno(req.params.id ,req.body.nomsite, req.body.deuxg, req.body.threeg, req.body.fourg, req.body.tcu, req.body.abis)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.delete('/user/:id',(req,res,next)=>{
    technoModel.deleteOneTechno(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})





module.exports=route