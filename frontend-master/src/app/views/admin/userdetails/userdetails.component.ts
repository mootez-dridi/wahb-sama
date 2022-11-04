import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
      id:any
      dataObject:any
      messageErr=''
      noHer=''
  constructor(private route:ActivatedRoute,private ds:DataService) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.ds.getOneUser(this.id).subscribe(response=>{
      console.log(response)
      this.dataObject=response

    }
      ,(err:HttpErrorResponse)=>this.messageErr="We Dont Found This User in Our DataBase")
  }

}
