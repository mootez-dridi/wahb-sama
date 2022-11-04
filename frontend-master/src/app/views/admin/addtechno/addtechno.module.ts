import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtechnoComponent } from './addtechno.component';

import { AddtechnoRoutingModule } from './addtechno-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddtechnoComponent
],
  imports: [
    CommonModule,
    AddtechnoRoutingModule,
    FormsModule,
    

  ]
})
export class AddtechnoModule { }
