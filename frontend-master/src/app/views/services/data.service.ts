import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  getAllUsers(){
    return this.http.get('http://localhost:3000/allusers')
  }
  gettechno(){
    return this.http.get('http://localhost:3000/techno')
  }
  addTechno(profile:any){
    return this.http.post('http://localhost:3000/addtechno',profile)

  }
  deleteOne(id:any){
    return this.http.delete('http://localhost:3000/techno/'+id)
  }
  updateTechno(id:any,newprofile:any){
    return this.http.patch('http://localhost:3000/techno/'+id+'/',newprofile)
  }
  getOneTechno(id:any){
    return this.http.get('http://localhost:3000/techno/'+id)
  }
  getAllUsersByDir(dir:any){
    return this.http.get('http://localhost:3000/usersByDir/'+dir)
  }
  addUser(profile:any){
    return this.http.post('http://localhost:3000/adduser',profile)
  }
  deleteUser(id:any,mat:any){
    return this.http.delete('http://localhost:3000/user/'+id+'/'+mat)
  }
  updadteUser(id:any,matricule:any,newprofile:any){
    return this.http.patch('http://localhost:3000/user/'+id+'/'+matricule,newprofile)
  }
  getOneUser(id:any){
    return this.http.get('http://localhost:3000/user/'+id)
  }

  getAllDirections(){
    return this.http.get('http://localhost:3000/directions')
  }
  addDirection(profileDir:any){
    return this.http.post('http://localhost:3000/add_direction',profileDir)
  }
  getAllTypesDemandes(){
    return this.http.get('http://localhost:3000/typeDemandes')
  }
  add_typeDemande(profile:any){
    return this.http.post('http://localhost:3000/addtype',profile)
  }
  deleteDirection(id:any,directionname:any){
    return this.http.delete('http://localhost:3000/direction/'+id+'/'+directionname)
  }
  deleteDemande(id:any,demande:any,responsable:any){
    return this.http.delete('http://localhost:3000/typedemande/'+id+'/'+demande+'/'+responsable)
  }
  dmFourAccepter(){
    return this.http.get('http://localhost:3000/demande_ACCEPTER')
  }
  dmFourRefuser(){
    return this.http.get('http://localhost:3000/demande_REF')
  }
  dmFourEnAtt(){
    return this.http.get('http://localhost:3000/demande_ATT')
  }
  dmFourApprouver(){
    return this.http.get('http://localhost:3000/demande_APP')
  }
  getOneUse(id:any){
    return this.http.get('http://localhost:3000/user/'+id)
  }

}
