import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  term:any
  dataArray:any=[]
  messageErr=""
  messageSucc=""
  messageDel=""
  dataUser={
    hierarchy:"",
    role:'',
    directionname:'',
    statu:true,
    id:'',
    matricule:""
  }
  messageEr=''
  myI:any
  myId=""
  myMat=""

  constructor(private ds:DataService,private route:Router) {
  }

  ngOnInit(): void {
    this.ds.getAllUsers().subscribe(data=>{
      this.dataArray=data
    })
  }

  delete(){

    this.ds.deleteUser(this.myId,this.myMat).subscribe((response)=>{
      this.messageDel=''
      this.messageEr=''
      this.dataArray.splice(this.myI,1)
      this.messageDel="User Supprimé "
      this.myI=100000000


    },(err:HttpErrorResponse)=>{
      this.messageEr=err.error
       this.myI=100000000

      }
      )
  }
  getNumb(i:any,id:any,mat:any,){
    this.messageDel=""
    this.messageEr=''
    this.myI=i
    this.myId=id
    this.myMat=mat
    console.log(this.myI,this.myMat,this.myId)
  }


  getdata(hierarchy:string,role:string,directionname:string,statu:boolean,id:any,matricule:any){
    this.messageErr=""
    this.messageSucc=""
    this.dataUser.hierarchy=hierarchy
    this.dataUser.role=role
    this.dataUser.directionname=directionname
    this.dataUser.statu=statu
    this.dataUser.id=id
    this.dataUser.matricule=matricule
    console.log(this.dataUser)
  }

  updateNewUser(ff:any){
    this.messageErr=""
    this.messageSucc=""
    let data=ff.value
    console.log(data)
    this.ds.updadteUser(this.dataUser.id,this.dataUser.matricule,data).subscribe(response=>{
      console.log(response)
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataUser.id)
      this.dataArray[indexId].hierarchy=data.hierarchy
      this.dataArray[indexId].role=data.role
      this.dataArray[indexId].directionname=data.directionname
      this.dataArray[indexId].statu=data.statu

      this.messageSucc=`Thi user ${this.dataArray[indexId].firstname} is updated`

    },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
    console.log(err.status)
    console.log(this.dataUser.matricule)
    }
    )
  }

  deatils(id:any){

    this.route.navigate(['admin/userdetails/'+id])
  }



}
