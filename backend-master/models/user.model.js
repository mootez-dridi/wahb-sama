const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Joi = require('joi');
const {Reclamationse} = require('./reclamations.model')
const {TypeDemande} = require('./typeDemande.model')



const schemaValidation=Joi.object({
        firstname: Joi.string().min(4).max(30).required(),
        lastname : Joi.string().min(4).max(30).required(),
        email : Joi.string().required().email(),
        matricule: Joi.string().min(3).max(255).required(),
        statu : Joi.boolean().required(),
        hierarchy:Joi.string().min(3).max(255),
        directionname : Joi.string(),
        role: Joi.string().valid('admin','user','technicien','chefService','surveillance').required(),
        password: Joi.string().min(8).max(255).required()
})
const UpdateValidation=Joi.object({
    statu :Joi.boolean().required(),
    hierarchy:Joi.string().min(3).max(255),
    directionname : Joi.string().valid('RADIO','ADMIN'),
    role: Joi.string().valid('user','technicien','chefService','surveillance'),
})

let userSchema = mongoose.Schema({
    
    firstname:{
        type: String,
        required: true,
        minlength:4,
        maxlength:30
    },
    lastname : {
        type: String,
        required: true,
        minlength:4,
        maxlength:30
    },
    email:{
        type: String,
        minlength: 3,
        maxlength: 255,
        required:true,
        unique: true  
    },
    matricule:{
        type: String,
        minlength: 3,
        maxlength: 255,
        required:true,
        unique: true 
    },
    statu:{
        type:Boolean,
        required:true
    },
    hierarchy:{
        type:String,
        minlength: 3,
        maxlength: 255,
        required:false,
        optional:true
    },
    directionname:{
        type: String,
        enum:['RADIO','ADMIN'],
        required:true
    },
    role:{
        type:String,
        enum: ['admin','user','chefService','technicien','surveillance'],
        
    },
    password : {
        type:String,
        minlength: 8,
        maxlength: 1024,
        required:true,
    }
})

let User = mongoose.model('user',userSchema)
exports.User = User
var url= process.env.URL



exports.postNewUser=(firstname,lastname,email,matricule,statu,hierarchy,directionname,role,password)=>{
    return new Promise((reslove,reject)=>{
                mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        let validation =schemaValidation.validate({firstname:firstname,lastname:lastname,email: email,matricule:matricule,statu:statu, hierarchy:hierarchy,directionname:directionname,role:role, password:password})
            if(validation.error){
                mongoose.disconnect()
                reject(validation.error.details[0].message)
            }

            return User.findOne({matricule:matricule})
            .then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("Matricule utlisé")
                }
                return User.findOne({email:email})
                .then((doc)=>{
                    if(doc){
                    mongoose.disconnect()
                    reject("Email utlisé ")
                    }else{
                        bcrypt.hash(password,10).then((hashedPassword)=>{
                            let user = new User({
                                firstname: firstname,
                                lastname: lastname,
                                email: email,
                                matricule: matricule,
                                statu: statu,
                                hierarchy: hierarchy,
                                directionname: directionname,
                                role: role,
                                password: hashedPassword
                                })
                                user.save().then((doc) => {
                                    mongoose.disconnect();
                                    reslove(doc)})
                                    .catch((err) => {
                                    mongoose.disconnect();
                                    reslove(err)
                        })
                            
              })
                    }
                    
                    
                })
            })
            
        }).catch((err)=>reject(err))
    })
}





var privateKey = process.env.PRIVATE_KEY
exports.login=(email,password)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            return   User.findOne({email:email}) 
        
        }).then((user)=>{
            if(!user){
                mongoose.disconnect()
                reject('informations invalides')
            }else{
                bcrypt.compare(password,user.password).then((same)=>{
                    if(same){
                        let token = jwt.sign({id:user._id,email:user.email,matricule:user.matricule,role:user.role,directionname:user.directionname,hierarchy:user.hierarchy,lastname:user.lastname,},privateKey,{
                            expiresIn:'1d'
                        })
                        mongoose.disconnect()
                        reslove(token)
                        
                    }else{
                        mongoose.disconnect()
                        reject(' informations invalides')
                    }
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                })
            }
        })
    })
}


exports.getAllUsers=()=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return User.find({})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getOneUser=(id)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return User.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.deleteOneUser=(id,matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
        return User.findOne({hierarchy:matricule})
        .then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject("impossible de supprimer responsable")
            }
            
                // 
               
               
                   return User.deleteOne({_id:id})
                })
            })
           
        })
            
        .then((doc)=>{
           
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    }



exports.updateOneUser=(id,matricule,statu,hierarchy,directionname,role)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            if(hierarchy!==null){

                let validation =UpdateValidation.validate({statu:statu,hierarchy:hierarchy,directionname:directionname,role:role})
                if(validation.error){
                    mongoose.disconnect()
                    reject(validation.error.details[0].message)
                }
                return User.findOne({ matricule: hierarchy, directionname: directionname })
                .then((doc)=>{
                    if(!doc && hierarchy!="null"){
                        mongoose.disconnect()
                        reject("User et son responsable  differente")
                    }
                    return Reclamationse.findOne({matricule_demandeur:matricule, $or: [{ etat: "APPROUVER" }, { etat: "En Att" }]})
                    .then((doc)=>{
                        if(doc){
                            mongoose.disconnect()
                            reject("Demande En Cours")
                        }
                        return User.updateOne({_id:id},{statu:statu ,hierarchy:hierarchy,directionname:directionname,role:role})
                    })
                    
                })
            }
    
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getAllUsersByDir=(directionname)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return User.find({directionname:directionname},{matricule:1 ,_id:0})
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}




