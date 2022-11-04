import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeFournitureRefRoutingModule } from './demande-fourniture-ref-routing.module';
import { DemandeFournitureRefComponent } from './demande-fourniture-ref.component';


@NgModule({
  declarations: [
    DemandeFournitureRefComponent
  ],
  imports: [
    CommonModule,
    DemandeFournitureRefRoutingModule
  ]
})
export class DemandeFournitureRefModule { }
