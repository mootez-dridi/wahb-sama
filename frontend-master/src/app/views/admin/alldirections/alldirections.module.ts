import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlldirectionsRoutingModule } from './alldirections-routing.module';
import { AlldirectionsComponent } from './alldirections.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlldirectionsComponent
  ],
  imports: [
    CommonModule,
    AlldirectionsRoutingModule,
    FormsModule
  ]
})
export class AlldirectionsModule { }
