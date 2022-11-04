const   mongoose = require('mongoose')
const Joi = require('joi');




const schemaValidation=Joi.object({
    demande: Joi.string().min(4).max(30).required(),
    responsable: Joi.string().min(3).max(255).required(),
    
})
let schemaTypeDemande = mongoose.Schema({
    demande:{
        type: String,
        required:true,
        unique:true
    },
    responsable:{
        type: String,
        minlength: 3,
        maxlength: 255,
        required:true,
        unique: true 
    }
})

let TypeDemande=mongoose.model('TypeDemande',schemaTypeDemande)
exports.TypeDemande=TypeDemande
var url= process.env.URL




exports.postNewType=(demande,responsable)=>{
    return new Promise((reslove,reject)=>{
                mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
                    let validation =schemaValidation.validate({demande,responsable})
                    if(validation.error){
                        mongoose.disconnect()
                        reject(validation.error.details[0].message)
                    }
            return TypeDemande.findOne({responsable:responsable})
            .then((doc)=>{
                if(doc){
                    mongoose.disconnect()
                    reject("Matricule exist")
                }
                return TypeDemande.findOne({demande:demande})
                .then((doc)=>{
                    if(doc){
                    mongoose.disconnect()
                    reject("Type de ticket exist")
                    }else{
                      
                            let typeDemande = new TypeDemande({
                                demande:demande,
                                responsable:responsable
                                })
                                typeDemande.save().then((doc) => {
                                    mongoose.disconnect();
                                    reslove(doc)})
                                    .catch((err) => {
                                    mongoose.disconnect();
                                    reslove(err)
                        })
                            
            
                    }
                    
                    
                })
            })
            
        }).catch((err)=>reject(err))
    })
}

exports.getAllDemande=()=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return TypeDemande.find()

        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getOneTypeDemande=(id)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return TypeDemande.findById(id)
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}



