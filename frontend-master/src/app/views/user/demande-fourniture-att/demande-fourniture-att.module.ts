import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationseAttRoutingModule } from './demande-fourniture-att-routing.module';
import { ReclamationseAttComponent } from './demande-fourniture-att.component';


@NgModule({
  declarations: [
    ReclamationseAttComponent
  ],
  imports: [
    CommonModule,
    ReclamationseAttRoutingModule
  ]
})
export class ReclamationseAttModule { }
