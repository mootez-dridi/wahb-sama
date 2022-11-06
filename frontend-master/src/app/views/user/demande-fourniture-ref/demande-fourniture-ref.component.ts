import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demande-fourniture-ref',
  templateUrl: './demande-fourniture-ref.component.html',
  styleUrls: ['./demande-fourniture-ref.component.css']
})
export class ReclamationseRefComponent implements OnInit {

  dataArray:any=[]
  constructor(private us:UserService) {

  }

  ngOnInit(): void {
    let matricule = this.us.userInfo().matricule
    this.us.getDemandeFourUser4(matricule).subscribe((rep)=>{
      this.dataArray=rep

    })
  }

}
