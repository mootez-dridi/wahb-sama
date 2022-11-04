import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllusersRoutingModule } from './allusers-routing.module';
import { AllusersComponent } from './allusers.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AllusersComponent
  ],
  imports: [
    CommonModule,
    AllusersRoutingModule,
    FormsModule,
    Ng2SearchPipeModule


  ]
})
export class AllusersModule { }
