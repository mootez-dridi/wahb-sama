import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnoRoutingModule } from './techno-routing.module';
import { TechnoComponent } from './techno.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [TechnoComponent],
  imports: [
    CommonModule,
    TechnoRoutingModule,
    TechnoRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class TechnoModule { }
