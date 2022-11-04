import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  data:any
  dataObject:any=[]

  constructor(private us:UserService,private route:Router) {

   }

  ngOnInit(): void {
     this.data=this.us.userInfo().id
     console.log(this.data)

     this.us.getOneUser(this.data).subscribe((rslt)=>{
       this.dataObject=rslt

    })
  }

}
