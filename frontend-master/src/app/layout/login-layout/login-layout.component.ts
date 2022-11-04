import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  messageError:any
  dataReceived:any
  url:any
  url_u:any
  constructor(private as:AuthService,private route:Router,private arouter:ActivatedRoute) {
    if(this.as.role()===true){
      this.route.navigate(["admin"])
    }
    if(this.as.roleUser()==true||this.as.roleChFour()==true||this.as.roleChInfo()==true){
      this.route.navigate(["user"])
    }
  }

  ngOnInit(): void {
    this.url= this.arouter.snapshot.queryParams["returnUrl"] || "/admin"
    this.url_u= this.arouter.snapshot.queryParams["returnUrl"] || "/user"

  }

  login(f:any){
    let data=f.value

    this.as.login(data).subscribe((resp)=>
      {
        this.dataReceived=resp
        this.as.saveDataProfile(this.dataReceived.token)
        if(this.as.role()===true){
          this.route.navigate([this.url])
        }else if(this.as.roleUser()===true){
          this.route.navigate([this.url_u])


        }

      },(err:HttpErrorResponse)=>this.messageError="Email ou mot de passe invalide")
  }

}


