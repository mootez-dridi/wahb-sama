import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-addtypedemande',
  templateUrl: './addtypedemande.component.html',
  styleUrls: ['./addtypedemande.component.css']
})
export class AddtypedemandeComponent implements OnInit {
  messageErr=""
  dataDirection:any=[]
  dataUsers:any=[]
  dataMat:any=[]
  messageS=""
  constructor(private ds:DataService,private route:Router) {
    this.ds.getAllDirections().subscribe(data=>{
      console.log(data)
      this.dataDirection=data
    })
    this.ds.getAllUsers().subscribe(data=>{
      console.log(data)
      this.dataUsers=data
    })
  }

  ngOnInit(): void {
  }


  matDirection(f:any){

    this.ds.getAllUsersByDir(f).subscribe(data=>{
      console.log(data)
      this.dataMat=data
      console.log(this.dataMat)
    })

  }


  addTypeDemande(f:any){
    let data=f.value
    this.ds.add_typeDemande(data).subscribe(resp=>{
      this.messageS="Type tickets ajouté"
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error.error

    })
  }

}
