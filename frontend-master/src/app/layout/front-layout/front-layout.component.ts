import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';
import { UserService } from 'src/app/views/services/user.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
  role:any
  verifRoleUser:any
  vf:any
  chF:any
  chInfo:any
  constructor(private as:AuthService,private route:Router,private us:UserService) {

    this.role = this.us.userInfo().role

    if(this.as.role()==true){
      this.verifRoleUser=true
      console.log("Connected")
    }else if(this.as.roleUser()==true){
      this.vf=true
    }
    if(this.as.roleChFour()==true){
      this.chF=true
    }
    if(this.as.roleChInfo()==true){
      this.chInfo=true
    }

  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

}
