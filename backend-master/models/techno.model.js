const   mongoose = require('mongoose')
const Joi =require('joi')
const jwt = require('jsonwebtoken')
const { User } = require('./user.model')
require('dotenv').config()

const schemaValidation=Joi.object({
    nomsite: Joi.string().valid('gbeli').required(),
    deuxg : Joi.string().valid('G900','G1800').required(),
    threeg : Joi.string().valid('U900','U2100').required(),
    fourg: Joi.string().valid('L800','L1800').required(),
    tcu : Joi.string().valid('TCU','SIU').required(),
    abis:Joi.string().valid('TDM','IP').required(),
    
})
const UpdateValidation=Joi.object({
    deuxg : Joi.string().valid('G900','G1800').required(),
    threeg : Joi.string().valid('U900','U2100').required(),
    fourg: Joi.string().valid('L800','L1800').required(),
    tcu : Joi.string().valid('TCU','SIU').required(),
    abis:Joi.string().valid('TDM','IP').required(),
})

let technoSchema = mongoose.Schema({

nomsite:{
    type: String,
    enum:['gbeli'],
    required:true
},
deuxg:{
    type: String,
    enum:['G900','G1800'],
    required:true
},


threeg:{
    type: String,
    enum:['U900','U2100'],
    required:true
    
},
fourg:{
    type: String,
    enum:['L800','L1800'],
    required:true
},
tcu:{
    type: String,
    enum:['TCU','SIU'],
    required:true
},

abis:{
    type: String,
    enum:['TDM','IP'],
    required:true
},


})

let Techno = mongoose.model('techno',technoSchema)
exports.Techno = Techno
var url= process.env.URL



exports.postNewTechno=(nomsite,deuxg,threeg,fourg,tcu,abis)=>{
    return new Promise((reslove,reject)=>{
                mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        let validation =schemaValidation.validate({nomsite:nomsite,deuxg:deuxg,threeg:threeg,tcu:tcu,fourg:fourg, abis:abis})
            if(validation.error){
                mongoose.disconnect()
                reject(validation.error.details[0].message)
            }
                else{
                        
                            let techno = new Techno({
                                nomsite: nomsite,
                                deuxg: deuxg,
                                threeg: threeg,
                                fourg: fourg,
                                tcu: tcu,
                                abis: abis,
                               
                                })
                                techno.save().then((doc) => {
                                    mongoose.disconnect();
                                    reslove(doc)})
                                    .catch((err) => {
                                    mongoose.disconnect();
                                    reslove(err)
                        
                            
              })
                    }
                    
                    
                })
            })
            
        }
    





exports.getAllTechno=()=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return Techno.find({})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getOneTechno=(id)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return Techno.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.deleteOneTechno=(id,responsable)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
        return User.findOne({matricule:responsable,$or: [{ role:'chefService' }, {role:'superviseur' }]})
        .then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject("Impossibel de supprimer ")
            }    
                return Techno.deleteOne({_id:id})
 
        })
            
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}




exports.updateTechno=(id,deuxg,threeg,fourg,tcu,abis)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

            if(!mongoose.Types.ObjectId.isValid(req.body.superintendent)){
                mongoose.disconnect()
                reject("no")
            }
            return  Techno.findOne({deuxg:deuxg,threeg:threeg,fourg:fourg,tcu:tcu,abis:abis})
        })
        .then((doc)=>{
            if(!doc){
                mongoose.disconnect()
                reject("Verifier Technologie Information")
            }
            

            return  Techno.updateOne({_id:id},{tcu:tcu})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}



