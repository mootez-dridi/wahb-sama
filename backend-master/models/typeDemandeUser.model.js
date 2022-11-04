const   mongoose = require('mongoose')
const Joi = require('joi');
const {User} = require('./user.model')
const {TypeDemande} = require('./typeDemande.model')
const {Direction} = require('./direction.model')

var url= process.env.URL

exports.deleteOneTypeDemande=(id,demande,responsable)=>{
    return new Promise((reslove,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
            
        return User.findOne({matricule:responsable,$or: [{ role:'chFourniture' }, {role:'chInformatique' }]})
        .then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject("Impossibel de supprimer cette ticket")
            }    
                return TypeDemande.deleteOne({_id:id})
 
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
