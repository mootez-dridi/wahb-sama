import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  dmFAcc:any
  dmFRef:any
  dmFApp:any
  dmFEnAtt:any
  constructor(private ds:DataService) {


   }

  ngOnInit(): void {


  }

  get2(){
    this.ds.dmFourAccepter().subscribe((res)=>{
      this.dmFAcc=res
      console.log(this.dmFAcc)
    })
  }
  get(){
    this.ds.dmFourApprouver().subscribe((res)=>{
      this.dmFApp=res
      console.log(this.dmFApp)
    })
  }


}
