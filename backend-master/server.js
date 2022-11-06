const express= require('express')
const userRoute=require('./routers/user.route')
const directionRoute=require('./routers/direction.route')
const typeDemandeRoute=require('./routers/typeDemande.route')
const reclamationsRoute=require('./routers/reclamations.route')
const typeDemandeUserRoute=require('./routers/typeDemandeUser.route')
const technoRoute=require('./routers/techno.route')

const app= express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin',"*")
//     res.setHeader('Access-Control-Control-Request-Method',"*")
//     res.setHeader('Access-Control-Allow-Headers',"authorization")
//     next()
// }) => bech n3awdhha b secret key

app.use('/',reclamationsRoute)
app.use('/',userRoute)
app.use('/',directionRoute)
app.use('/',typeDemandeRoute)
app.use('/',typeDemandeUserRoute)
app.use('/',technoRoute)













app.listen(3000,()=>{
    console.log('Server Work In Port 3000')
})