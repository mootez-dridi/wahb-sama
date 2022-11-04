const mongoose = require('mongoose')
require('dotenv').config()
const Joi = require('joi');
const { TypeDemande } = require('./typeDemande.model');

const schemaValidationAdd=Joi.object({
    besoin: Joi.string().required(),
})

let DemandeFournitureSchema = mongoose.Schema({
    nom_demandeur:{
        type: String,
        required: true,
        minlength:4,
        maxlength:30
    },
    matricule_demandeur:{
        type: String,
        minlength: 3,
        maxlength: 255,
        required:true,
    },
    direction_demandeur:{
        type: String,
        required:true
    },
    matricule_responsable:{
        type: String,
        minlength: 3,
        maxlength: 255,
        required:true,
    },
    date_creation:{
        type:Date,
        default:Date.now
    },
    etat:{
        type:String,
        default: "En Att"
    },
    besoin:{
        type:String,
        required:true
    },
   
    
})

let DemandeFourniture = mongoose.model('demandeFourniture',DemandeFournitureSchema)
exports.DemandeFourniture= DemandeFourniture
var url= process.env.URL


exports.postNewDemandeFourniture=(nom_demandeur,matricule_demandeur,direction_demandeur,matricule_responsable,besoin,etat)=>{
    return new Promise((reslove,reject)=>{
                mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
                    let validation =schemaValidationAdd.validate({besoin})
                    if(validation.error){
                        mongoose.disconnect()
                        reject(validation.error.details[0].message)
                    }
                    let demandeFourniture = new DemandeFourniture({
                        nom_demandeur:nom_demandeur,
                        matricule_demandeur:matricule_demandeur,
                        direction_demandeur:direction_demandeur,
                        matricule_responsable:matricule_responsable,
                        etat:etat,
                        date_creation:Date.now().toString(),
                        besoin:besoin,
                                })
                                demandeFourniture.save().then((doc) => {
                                    mongoose.disconnect();
                                    reslove(doc)})
                                    .catch((err) => {
                                    mongoose.disconnect();
                                    reslove(err)
                        })
                            
                    
                    
            
            
        }).catch((err)=>reject(err))
    })
}

exports.getDmdFourUser=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_demandeur:matricule,etat:"En Att"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reject("You Don't Have Any DmD ")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getDmdFourUser2=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_demandeur:matricule,etat:"ACCEPTER"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reject("Aucune DMD en En att")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getDmdFourUser3=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_demandeur:matricule,etat:"APPROUVER"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reject("You Don't Have Any DmD ")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getDmdFourUser4=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_demandeur:matricule,etat:"REFUSER"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reject("You Don't Have Any DmD ")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
// exports.getDmdaccp=()=>{
//     return new Promise((reslove,reject)=>{
//         mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
//             return DemandeFourniture.find({etat:'ACCEPTER'}).count()
//         }).then((doc)=>{
            
//             mongoose.disconnect()
//             reslove(doc)
//         }).catch((err)=>{
//             mongoose.disconnect()
//             reject(err)
//         })
//     })
// }
// exports.getDmdappr=()=>{
//     return new Promise((reslove,reject)=>{
//         mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
//             return DemandeFourniture.find({etat:'APPROUVER'}).count()
//         }).then((doc)=>{
            
//             mongoose.disconnect()
//             reslove(doc)
//         }).catch((err)=>{
//             mongoose.disconnect()
//             reject(err)
//         })
//     })
// }
// exports.getDmdatt=()=>{
//     return new Promise((reslove,reject)=>{
//         mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
//             return DemandeFourniture.find({etat:'En Att'}).count()
//         }).then((doc)=>{
            
//             mongoose.disconnect()
//             reslove(doc)
//         }).catch((err)=>{
//             mongoose.disconnect()
//             reject(err)
//         })
//     })
// }
// exports.getDmdref=()=>{
//     return new Promise((reslove,reject)=>{
//         mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
//             return DemandeFourniture.find({etat:'REFUSE'}).count()
//         }).then((doc)=>{
            
//             mongoose.disconnect()
//             reslove(doc)
//         }).catch((err)=>{
//             mongoose.disconnect()
//             reject(err)
//         })
//     })
// }

exports.getDmdFourResponsable=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_responsable:matricule,etat:"En Att"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reslove("You Don't Have Any DmD")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getOneDmdFour=(id)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
            return DemandeFourniture.findOne({_id:id})
        }).then((doc)=>{
            if(!doc){
                mongoose.disconnect()
                reject("No Dmd")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.updateDmdFour=(id,matricule_responsable,etat)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        
        return DemandeFourniture.updateOne({_id:id},{matricule_responsable:matricule_responsable,etat:etat})

        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.getDmdFourChf=()=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({etat:"APPROUVER"})
        }).then((doc)=>{
            if(doc.length<1){
                mongoose.disconnect()
                reslove("You Don't Have Any DmD")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.updateDmdFourChFour=(id,etat)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            

              
        return DemandeFourniture.updateOne({_id:id},{etat:etat})
        
    
        }).then((doc)=>{
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


//
exports.getDmdFourUserCountAtt=(matricule)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{      
            return DemandeFourniture.find({matricule_demandeur:matricule,etat:"En Att"}).count()
        }).then((doc)=>{
            if(doc==0){
                mongoose.disconnect()
                reject("You Don't Have Any DmD")
            }
            mongoose.disconnect()
            reslove(doc)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


