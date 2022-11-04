import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demande-fourniture-att',
  templateUrl: './demande-fourniture-att.component.html',
  styleUrls: ['./demande-fourniture-att.component.css']
})
export class DemandeFournitureAttComponent implements OnInit {

  dataArray:any=[]
  constructor(private us:UserService) {

  }

  ngOnInit(): void {
    let matricule = this.us.userInfo().matricule
    this.us.getDemandeFourUser(matricule).subscribe((rep)=>{
      this.dataArray=rep

    })
  }

}
