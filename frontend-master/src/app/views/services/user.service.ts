import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  helper = new JwtHelperService()

  constructor(private http:HttpClient) {}


  userInfo(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    return decodeToken

  }

  addDemandeFourniture(profile:any){
    return this.http.post('http://localhost:3000/adddemande',profile)
  }

  getDemandeFourUser(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser/'+matricule)
  }
  getDemandeFourUser2(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser2/'+matricule)
  }
  getDemandeFourUser3(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser3/'+matricule)
  }
  getDemandeFourUser4(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser4/'+matricule)
  }

  getDemandeInfoUser(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser/'+matricule)
  }
  getDemandeInfoUser2(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser2/'+matricule)
  }
  getDemandeInfoUser3(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser3/'+matricule)
  }
  getDemandeInfoUser4(matricule:any){
    return this.http.get('http://localhost:3000/demandeUser4/'+matricule)
  }

  getDemandeFourResponsable(matricule:any){
    return this.http.get('http://localhost:3000/demandeResponsable/'+matricule)
  }
  getOneDmdFour(id:any){
    return this.http.get('http://localhost:3000/demande/'+id)
  }
  getDemandeInfoResponsable(matricule:any){
    return this.http.get('http://localhost:3000/demandeInformatiqueResponsable/'+matricule)
  }
  getOneDmdInfo(id:any){
    return this.http.get('http://localhost:3000/demandeInformatique/'+id)
  }
  approuverDmdfour(id:any,newprofile:any){
    return this.http.patch('http://localhost:3000/demande/'+id,newprofile)
  }
  approuverDmdInfo(id:any,newprofile:any){
    return this.http.patch('http://localhost:3000/demandeInformatique/'+id,newprofile)
  }

  demandeFournitureUserAtt(matricule:any){
    return this.http.get('http://localhost:3000/demandeUserAtt/'+matricule)
  }
  getOneUser(id:any){
    return this.http.get('http://localhost:3000/user/'+id)
  }
  gettechno(){
    return this.http.get('http://localhost:3000/techno')
  }
}
