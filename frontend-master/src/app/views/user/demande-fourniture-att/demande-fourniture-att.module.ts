import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeFournitureAttRoutingModule } from './demande-fourniture-att-routing.module';
import { DemandeFournitureAttComponent } from './demande-fourniture-att.component';


@NgModule({
  declarations: [
    DemandeFournitureAttComponent
  ],
  imports: [
    CommonModule,
    DemandeFournitureAttRoutingModule
  ]
})
export class DemandeFournitureAttModule { }
