import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-addtechno',
  templateUrl: './addtechno.component.html',
  styleUrls: ['./addtechno.component.css']
})
export class AddtechnoComponent implements OnInit {
  messageErr=""
  messageSucc=""
  datanomsite:any=[]
  datadeuxg:any=[]
  datathreeg:any=[]
  datafourg:any=[]
  datatcu:any=[]
  dataabis:any=[]


  dataTechnos:any=[]
  constructor( private ds:DataService,private route:Router) { }

  ngOnInit(): void {
    this.ds.gettechno().subscribe(data=>{
      this.datanomsite=data
      this.datadeuxg=data
      this.datathreeg=data
      this.datafourg=data
      this.datatcu=data
      this.dataabis=data
    })
    this.ds.gettechno().subscribe(data=>{

      this.dataTechnos=data
    })

  }

  
  addTechno(f:any){
    this.messageSucc=""
    this.messageErr=""
    let data=f.value



    this.ds.addTechno(data).subscribe(response=>{
     this.messageSucc="technologie ajouté avec succes"
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error.error
    })

  }

}










