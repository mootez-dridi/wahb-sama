import { Component, OnInit } from '@angular/core';
import { ChFService } from '../../services/ch-f.service';

@Component({
  selector: 'app-approbation-dmd-four',
  templateUrl: './approbation-dmd-four.component.html',
  styleUrls: ['./approbation-dmd-four.component.css']
})
export class ApprobationDmdFourComponent implements OnInit {
  dataArray:any=[]
  i:any
  respon:any=[]
  msgSucc=''
  msgSuccc=''
  constructor(private cf:ChFService) {

  }

  ngOnInit(): void {
    this.cf.getDemandeFourChFour().subscribe((data)=>{
      this.dataArray=data
    })
  }

  getdata(id:any,i:any){
    this.msgSuccc=''
    this.msgSucc=''
    this.cf.getOneDmdFour(id).subscribe((data)=>{
      this.respon=data
      this.i=i
      console.log(this.respon._id)

    })
  }

  approbationDmdFour(ff:any){
    ff.value.etat="ACCEPTER"
    let data = ff.value
    this.cf.approbationDmdFour(this.respon._id,data).subscribe((rslt)=>{
      this.msgSucc='Demande Accepter'
      this.dataArray.splice(this.i,1)
      this.i=100000;
    })
  }
  refusDmdFour(fff:any){
    fff.value.etat="REFUSER"
    let data = fff.value
    this.cf.approbationDmdFour(this.respon._id,data).subscribe((rslt)=>{
      console.log(rslt)
      this.msgSuccc='DEMANDE REFUSER'
      this.dataArray.splice(this.i,1)
      this.i=100000;
    })
  }

}
