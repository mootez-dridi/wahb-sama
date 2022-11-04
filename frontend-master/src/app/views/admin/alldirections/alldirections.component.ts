import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-alldirections',
  templateUrl: './alldirections.component.html',
  styleUrls: ['./alldirections.component.css']
})
export class AlldirectionsComponent implements OnInit {
  messageErr=""
  messageSucc=""
  messageDel=""
  dataArray:any=[]
  myId=""
  myI:any
  myDirectionname=""
  constructor(private ds:DataService,private route:Router) {

  }

  ngOnInit(): void {

    this.ds.getAllDirections().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })

  }
  addDirection(f:any){
    this.messageErr=""
    this.messageSucc=""
    let data = f.value
    this.ds.addDirection(data).subscribe(data=>{
      this.messageSucc="Direction Ajouter"
      this.dataArray.push(data)
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
    })
  }
  dd(){
    this.messageErr=""
    this.messageSucc=""
  }
  getName(i:any,id:any,directionname:any){
    this.messageDel=""
    this.messageSucc=""
    this.myId=id
    this.myI=i
    this.myDirectionname=directionname
    console.log(this.myId,this.myI,this.myDirectionname)

  }

  delete(){

    this.ds.deleteDirection(this.myId,this.myDirectionname).subscribe((response)=>{
      console.log(response)
      this.dataArray.splice(this.myI,1)
      this.myI=1000000
      this.messageSucc="Direction Supprimé"
    },(err:HttpErrorResponse)=>{
      this.messageDel=err.error
      console.log(err.error)
      console.log(err.status)
      this.myI=1000000


      }
      )
  }

}
