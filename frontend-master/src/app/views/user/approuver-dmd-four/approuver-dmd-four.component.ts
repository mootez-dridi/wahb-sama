import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-approuver-dmd-four',
  templateUrl: './approuver-dmd-four.component.html',
  styleUrls: ['./approuver-dmd-four.component.css']
})
export class ApprouverDmdFourComponent implements OnInit {
  dataArray:any=[]
  dataDemande={
    id:'',

  }
  i=""
  respon:any=[]
  msgSucc=''
  constructor(private us:UserService) {

  }

  ngOnInit(): void {

    let matricule = this.us.userInfo().matricule

    this.us.getDemandeFourResponsable(matricule).subscribe((data)=>{
      this.dataArray=data
      console.log(data)
      console.log(this.dataArray)

    })
  }

  getdata(id:any,i:any){
    this.us.getOneDmdFour(id).subscribe((data)=>{
      this.respon=data
      this.i=i
      console.log(this.respon._id)

    })
  }
  approuverDmdFour(ff:any){
    let t
    let et2
    if(this.us.userInfo().hierarchy=='null'){
       t="APPROUVER"
    }else{
      t="En Att"
    }
    if(this.us.userInfo().hierarchy=='null'){
      et2=this.us.userInfo().matricule
    }else{
      et2=this.us.userInfo().hierarchy
    }
    ff.value.etat=t
    ff.value.matricule_responsable=et2
    let data = ff.value

    this.us.approuverDmdfour(this.respon._id,data).subscribe((rslt)=>{
    console.log(rslt)
      this.dataArray.splice(this.i,1)
     },(err:HttpErrorResponse)=>{
      console.log('np')
      console.log(err.error.error)
      console.log(err.status)
      console.log(ff.value)
    })
  }

  refusDmdFour(fff:any){

    fff.value.etat="REFUSER"

    let data = fff.value

    this.us.approuverDmdfour(this.respon._id,data).subscribe((rslt)=>{
    console.log(rslt)
      this.dataArray.splice(this.i,1)
     },(err:HttpErrorResponse)=>{
      console.log('np')
      console.log(err.error.error)
      console.log(err.status)
      console.log(fff.value)
    })
  }


}
