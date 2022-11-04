const route = require('express').Router()
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

route.get('/',(req,res,next)=>{
    res.send('Welcome To Api')
})

var privateKey = process.env.PRIVATE_KEY

verifyToken=(req,res,next)=>{
    let token=req.headers.authorization
    if(!token){
        res.status(400).json({msg:'access rejected'})
    }

    try{
        jwt.verify(token,privateKey)
        next()
    }catch(e){
        res.status(400).json({msg:e})
    }
}

verifyTokenAdmin=(req,res,next)=>{
    let token=req.headers.authorization
    let role=req.headers.role
    if(!token||role!='admin'){
        res.status(400).json({msg:'acces rejected to use this function'})
    }
    try{
        jwt.verify(token,privateKey)
        next()
    }catch(e){
        res.status(400).json({msg:e})
    }
}

var secretKey = process.env.SECRET_KEY
var clientKey = process.env.CLIENT_KEY

verifySecretClient=(req,res,next)=>{
    let sk = req.params.secret
    let ck = req.params.client
    if(sk==secretKey&&ck==clientKey){
        next()
    }else{
        res.status(400).json({error:"we cant access to this route because you dont send secret and clien ==> key"})
    }
}

route.post('/adduser',(req,res,next)=>{
    userModel
    .postNewUser(req.body.firstname, req.body.lastname, req.body.email, req.body.matricule, req.body.statu, req.body.hierarchy, req.body.directionname, req.body.role, req.body.password)
    .then((user)=>res.status(200).json({user:user,msg:'user added !!'}))
    .catch((err)=>res.status(400).json({error:err||error}))
})

route.post('/login',(req,res,next)=>{
    userModel
    .login(req.body.email, req.body.password)
    .then((token)=>res.status(200).json({token:token}))
    .catch((err)=>res.status(400).json({error:err}))
})

route.get('/myinfo/:secret/:client',verifyToken,verifySecretClient,(req,res,next)=>{ 
        let token= req.headers.authorization
        let user = jwt.decode(token,{complete:true})
        res.status(200).send({user:user.payload})
    
})

    route.get('/allusers',(req,res,next)=>{
        
        userModel.getAllUsers()
        .then((doc)=>res.status(200).json(doc))
        .catch((err)=>res.status(404).json(err))
    })
route.get('/usersByDir/:directionname',(req,res,next)=>{
    userModel.getAllUsersByDir(req.params.directionname)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(404).json(err))
})

route.get('/user/:id',(req,res,next)=>{
    userModel.getOneUser(req.params.id)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.delete('/user/:id/:matricule',(req,res,next)=>{
    userModel.deleteOneUser(req.params.id,req.params.matricule)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})

route.patch('/user/:id/:matricule',(req,res,next)=>{
    userModel.updateOneUser(req.params.id ,req.params.matricule,req.body.statu,req.body.hierarchy, req.body.directionname, req.body.role)
    .then((doc)=>res.status(200).json(doc))
    .catch((err)=>res.status(400).json(err))
})







module.exports = route