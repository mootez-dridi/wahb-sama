import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css']
})
export class TechnoComponent implements OnInit {
  term:any
  dataArray:any=[]
  messageErr=""
  messageSucc=""
  messageDel=""
  dataTechno={
    id:'',
    nomsite: '',
    deuxg:"",
    threeg:'',
    fourg:'',

    tcu:'',
    abis:""
  }
  messageEr=''
  myI:any
  myId=""
  nomsite=""

  constructor(private route:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    this.ds.gettechno().subscribe(data=>{
      this.dataArray=data
    })
  }

  deleteOne(){

    this.ds.deleteOne(this.myId).subscribe((response)=>{
      this.messageDel=''
      this.messageEr=''
      this.dataArray.splice(this.myI,1)
      this.myI=-1;
      this.messageDel="techno Supprimé"



    },(err:HttpErrorResponse)=>{
      this.messageDel=''
      this.messageEr=''
      this.messageEr=err.error
       this.myI=100000000

      }
      )
  }


  getdata(nomsite:string,deuxg:string,threeg:string,fourg:string,tcu:string,abis:string,id:any){
    this.messageErr=""
    this.messageSucc=""
    this.dataTechno.nomsite=nomsite
    this.dataTechno.deuxg=deuxg
    this.dataTechno.threeg=threeg
    this.dataTechno.fourg=fourg
    this.dataTechno.id=id
    this.dataTechno.tcu=tcu
    this.dataTechno.abis=abis

    console.log(this.dataTechno)
  }

  updateNewTechno(ff:any){
    this.messageErr=""
    this.messageSucc=""
    let data=ff.value
    console.log(data)
    this.ds.updateTechno(this.dataTechno.id,this.dataTechno.nomsite).subscribe(response=>{
      console.log(response)
      let indexId = this.dataArray.findIndex((obj:any)=>obj._id==this.dataTechno.id)
      this.dataArray[indexId].deuxg=data.deuxg
      this.dataArray[indexId].threeg=data.threeg
      this.dataArray[indexId].fourg=data.fourg
      this.dataArray[indexId].tcu=data.tcu
      this.dataArray[indexId].abis=data.abis


      this.messageSucc=`Thi techno ${this.dataArray[indexId].nomsite} is updated`

    },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
    console.log(err.status)
    console.log(this.dataTechno.nomsite)
    }
    )
  }

}
