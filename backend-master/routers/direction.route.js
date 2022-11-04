const directionModel=require('../models/direction.model')
const  route  = require('express').Router()



route.get('/',(req,res,next)=>{
    directionModel.testConnect()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

route.post('/add_direction',(req,res,next)=>{
    directionModel.postNewDirection(req.body.directionname)
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

route.get('/directions',(req,res,next)=>{
    directionModel.getAllDirection()
    .then((msg)=>res.json(msg))
    .catch((err)=>res.status(400).json(err))
})

route.get('/direction/:id',(req,res,next)=>{
    directionModel.getOneDirection(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/direction/:id',(req,res,next)=>{
    directionModel.updateDirection(req.params.id ,req.body.responsable,req.body.directionname)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.delete('/direction/:id/:directionname',(req,res,next)=>{
    directionModel.deleteOneDirection(req.params.id,req.params.directionname)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})





module.exports=route