import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationseRefRoutingModule } from './demande-fourniture-ref-routing.module';
import { ReclamationseRefComponent } from './demande-fourniture-ref.component';


@NgModule({
  declarations: [
    ReclamationseRefComponent
  ],
  imports: [
    CommonModule,
    ReclamationseRefRoutingModule
  ]
})
export class ReclamationseRefModule { }
