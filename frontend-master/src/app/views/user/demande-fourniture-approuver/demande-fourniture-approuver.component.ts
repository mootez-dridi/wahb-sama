import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demande-fourniture-approuver',
  templateUrl: './demande-fourniture-approuver.component.html',
  styleUrls: ['./demande-fourniture-approuver.component.css']
})
export class ReclamationseApprouverComponent implements OnInit {


  dataArray:any=[]
  constructor(private us:UserService) {

  }

  ngOnInit(): void {
    let matricule = this.us.userInfo().matricule
    this.us.getDemandeFourUser3(matricule).subscribe((rep)=>{
      this.dataArray=rep

    })
  }

}
