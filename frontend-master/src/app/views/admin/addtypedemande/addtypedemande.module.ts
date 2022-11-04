import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtypedemandeRoutingModule } from './addtypedemande-routing.module';
import { AddtypedemandeComponent } from './addtypedemande.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddtypedemandeComponent
  ],
  imports: [
    CommonModule,
    AddtypedemandeRoutingModule,
    FormsModule
  ]
})
export class AddtypedemandeModule { }
