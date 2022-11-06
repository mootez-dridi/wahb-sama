const   mongoose = require('mongoose')
const {User} = require('./user.model')
const {Reclamationse} = require('./reclamations.model')
const Joi =require('joi')
let schemaDirection = mongoose.Schema({
    directionname:{
        type: String,
        required:true,
        unique:true
        
    }
})
const schemaValidation = Joi.object({
    directionname: Joi.string().required(),
    
})

var Direction=mongoose.model('direction',schemaDirection)
exports.Direction = Direction
var url= process.env.URL



exports.postNewDirection=(directionname)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            let validation = schemaValidation.validate({directionname:directionname,})
            if(validation.error){
                mongoose.disconnect()
                reject(validation.error.details[0].message)
            }
            return Direction.findOne({directionname:directionname})
            .then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("Direction Deja Exist")  
                }
            })
            
        
    })
    .then(()=>{
        
        
        
        let direction=new Direction({
            directionname:directionname,
        })
        direction.save().then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
        }).catch((err)=>reject(err))
    })
}

exports.getAllDirection=()=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return Direction.find({})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getOneDirection=(id)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return Direction.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.updateDirection=(id,responsable,directionname)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

            if(!mongoose.Types.ObjectId.isValid(req.body.superintendent)){
                mongoose.disconnect()
                reject("no")
            }
            return  User.findOne({matricule:responsable,directionname:directionname})
        })
        .then((doc)=>{
            if(!doc){
                mongoose.disconnect()
                reject("Verifier Responsable Information")
            }
            

            return  Direction.updateOne({_id:id},{responsable:responsable})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.deleteOneDirection=(id,directionname)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
        return User.findOne({directionname:directionname})
        .then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject("Direction non vide")
            }
            return Reclamationse.findOne({direction_demandeur:directionname, $or: [{ etat: "APPROUVER" }, { etat: "En Att" }]})
            .then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("Cette direction a un ticket fourniture en cours")
                }
                return DemandeInformatique.findOne({direction_demandeur:directionname, $or: [{ etat: "APPROUVER" }, { etat: "En Att" }]})
            }).then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("Cette direction a un ticket Informatique en cours")
                }
                return Direction.deleteOne({_id:id})
            })
           
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
