import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Profile={
    username:'',
    role:''
  }
  helper = new JwtHelperService()

  constructor(private http:HttpClient) {

  }
  login(data:any){
    return this.http.post('http://localhost:3000/login',data)
  }
  saveDataProfile(token:any){
    localStorage.setItem('token',token)
  }
  getEmail(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    return decodeToken.email
  }

  role(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken= this.helper.decodeToken(token)
    if(this.helper.isTokenExpired(token)){
      return false
    }
    if(decodeToken.role!="admin"){
      return false
    }
    return true

  }

  roleUser(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken= this.helper.decodeToken(token)
    if(this.helper.isTokenExpired(token)){
      return false
    }
    if(decodeToken.role=="admin"){
      return false
    }
    return true

  }
  roleChFour(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken= this.helper.decodeToken(token)
    if(this.helper.isTokenExpired(token)){
      return false
    }
    if(decodeToken.role!="chF"){
      return false
    }
    return true

  }

  roleChInfo(){
    let token:any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let decodeToken= this.helper.decodeToken(token)
    if(this.helper.isTokenExpired(token)){
      return false
    }
    if(decodeToken.role!="chInfor"){
      return false
    }
    return true

  }





}
