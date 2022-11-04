import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-alltypesdemandes',
  templateUrl: './alltypesdemandes.component.html',
  styleUrls: ['./alltypesdemandes.component.css']
})
export class AlltypesdemandesComponent implements OnInit {
  myres=''
  myI=""
  myDem=""
  myId=""
  dataArray:any=[]
  term:any
  deleteErr=""
  deleteSucc=""
  constructor(private ds:DataService,private route:Router) {

  }
  ngOnInit(): void {
    this.ds.getAllTypesDemandes().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
  }
  getInfo(i:any,id:any,demande:any,responsable:any){
    this.deleteErr=""
    this.myres=responsable
    this.myI=i
    this.myDem=demande
    this.myId=id
    console.log(this.myres,this.myI,this.myDem,this.myId)

  }
  delete(){

    this.ds.deleteDemande(this.myId,this.myDem,this.myres).subscribe((response)=>{
      console.log(response)
      this.dataArray.splice(this.myI,1)
      this.deleteSucc="Deleted yes"


    },(err:HttpErrorResponse)=>{
      this.deleteErr=err.error
      console.log(this.deleteErr)

      }
      )
  }



}
