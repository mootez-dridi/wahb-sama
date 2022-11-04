import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-demande-fourniture',
  templateUrl: './add-demande-fourniture.component.html',
  styleUrls: ['./add-demande-fourniture.component.css']
})
export class AddDemandeFournitureComponent implements OnInit {
  msgErr=""
  msgSucc=""
  constructor(private us:UserService,private route:Router) {

   }

  ngOnInit(): void {
  }
  addDemandeFourniture(f:any){
   this.msgErr=""
   this.msgSucc=""
    let data
    let et
    let  et2
    f.value.nom_demandeur=this.us.userInfo().lastname
    f.value.direction_demandeur=this.us.userInfo().directionname
    f.value.matricule_demandeur=this.us.userInfo().matricule
    if(this.us.userInfo().hierarchy=='null'){
      et2=this.us.userInfo().matricule
    }else{
      et2=this.us.userInfo().hierarchy
    }
    f.value.matricule_responsable=et2
    if( !(this.us.userInfo().hierarchy=='null')){
      et="En Att"

    }else if((this.us.userInfo().role=='chF')|| (this.us.userInfo().hierarchy=='null')){
      et="APPROUVER"
    }

    f.value.etat=et
    console.log(f.value.etat,et)
    console.log(this.us.userInfo().hierarchy)
    data=f.value
    this.us.addDemandeFourniture(data).subscribe((rep)=>{
      this.msgSucc="Reclamation Ajouté"
    },(err:HttpErrorResponse)=>{
      this.msgErr=err.error.error
      console.log(this.msgErr)
    })
  }

}
