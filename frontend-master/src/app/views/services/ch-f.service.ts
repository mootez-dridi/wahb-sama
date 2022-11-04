import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ChFService {
  helper = new JwtHelperService()

  constructor(private http:HttpClient) { }

  userInfo(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    return decodeToken

  }
  getDemandeFourChFour(){
    return this.http.get('http://localhost:3000/demandeChF')
  }
  getOneDmdFour(id:any){
    return this.http.get('http://localhost:3000/demande/'+id)
  }
  approbationDmdFour(id:any,newprofile:any){
    return this.http.patch('http://localhost:3000/demande/'+id,newprofile)
  } gettechno(){
    return this.http.get('http://localhost:3000/techno')
  }

}
