import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  messageErr=""
  messageSucc=""
  dataDirection:any=[]
  dataUsers:any=[]
  dataMat:any=[]

  constructor(private ds:DataService,private route:Router) {

  }

  ngOnInit(): void {
    this.ds.getAllDirections().subscribe(data=>{
      this.dataDirection=data
    })
    this.ds.getAllUsers().subscribe(data=>{

      this.dataUsers=data
    })

  }

  matDirection(f:any){

    this.ds.getAllUsersByDir(f).subscribe(data=>{
      console.log(data)
      this.dataMat=data

    })

  }

  addUser(f:any){
    this.messageSucc=""
    this.messageErr=""
    let data=f.value
    if(!f.value["statu"]){
      f.value["statu"]=false
    }
    if(!f.value["hierarchy"]){
      f.value["hierarchy"]="null"
    }

    this.ds.addUser(data).subscribe(response=>{
     this.messageSucc="User ajouté avec succes"
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error.error
    })

  }

}



















  // addUser(f:any){
  //   let data=f.value
  //   // console.log(data)
  //   this.ds.addUser(data).subscribe(response=>{
  //     console.log(response)
  //     this.route.navigate(['/admin/allusers'])

  //   },(err:HttpErrorResponse)=>{
  //     console.log(err.error)
  //     console.log(err.status)
  //   })

  // }



