import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demande-fourniture-accepter',
  templateUrl: './demande-fourniture-accepter.component.html',
  styleUrls: ['./demande-fourniture-accepter.component.css']
})
export class ReclamationseAccepterComponent implements OnInit {

  dataArray:any=[]
  constructor(private us:UserService) {
    let matricule = this.us.userInfo().matricule
    this.us.getDemandeFourUser2(matricule).subscribe((rep)=>{
      this.dataArray=rep

    })
  }

  ngOnInit(): void {

  }
}
